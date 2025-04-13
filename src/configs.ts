export const Configs = {
  app: {
    globalPrefix: process.env.APP_GLOBAL_PREFIX || '/backend',
    httpPort: Number(process.env.APP_HTTP_PORT) || 3000,
    grpcPort: Number(process.env.APP_GRPC_PORT) || 5001,
  },
  mongodb: {
    host: process.env.MONGO_HOST,
    password: process.env.MONGO_PASSWORD,
  },
};
