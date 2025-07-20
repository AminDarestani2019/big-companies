const apps = [
    {
      name: "bigcompaniesapp",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        PORT: process.env.PORT || 3000,
      },
      watch: false,
      autorestart: true,
    },
  ];

export default apps;