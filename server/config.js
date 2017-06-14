const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://gg:gg@ds027155.mongolab.com:27155/custdb',
  port: process.env.PORT || 8000,
};

export default config;
