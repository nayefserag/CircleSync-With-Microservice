const dotenv = require('dotenv');
dotenv.config();
module.exports = {

    server: {
      port: process.env.LOCAL_PORT 

    },

    redis: {
      publisher: process.env.PUBLISHER_CHANNEL_NAME , 
      subscriber: process.env.SUBSCRIPER_CHANNEL_NAME,
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY

    },
  
  };
  