const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    // Server configuration
    server: {
      port: process.env.LOCAL_PORT ,

    },
    // Database configuration
    database: {
    url: process.env.DB_CONNECTION_URL,
    mysql :{ 
      host: process.env.MYSQL_HOST, 
      user: process.env.MYSQL_USER, 
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB }
    },
  
    // Authentication configuration
    auth: {
      secretKey: process.env.JWT_SECRET 
      ,tokenName: process.env.TOKEN_NAME

    },
  
    // Email configuration
    email: {
      user : process.env.EMAIL_USER
      ,pass : process.env.EMAIL_PASS
    },
    // Session configuration
    session: {
      secret: process.env.SESSION_SECRET,
    },
    // Redis configuration
    redis: {
      publisher: process.env.PUBLISHER_CHANNEL_NAME , 
      subscriber: process.env.SUBSCRIPER_CHANNEL_NAME,
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region : process.env.REGION,
      bucket_name : process.env.BUCKET_NAME

    },
  };
  