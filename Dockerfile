FROM node:18
WORKDIR /app

RUN apt-get update \
    && apt-get install -y netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*
    
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Add wait-for script

COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

# Use the script before build
EXPOSE 3000
CMD [ "/wait-for.sh", "mongodb","npm" , "run","build-and-start" ]