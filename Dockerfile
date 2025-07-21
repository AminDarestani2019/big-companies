# build the application
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .



ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI

RUN if [ -z "$MONGODB_URI" ]; then \
      echo "❌ MONGODB_URI is NOT set. Build will probably fail."; \
    else \
      echo "✅ MONGODB_URI is set (hidden for security)."; \
    fi

RUN npm run build

# run the application
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production


COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/public ./public

# create a volume for public
VOLUME ["/app/public"]

EXPOSE 3000
CMD ["npm","start"]
