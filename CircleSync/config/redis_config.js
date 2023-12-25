const Redis = require('ioredis');
const redisConfig = {
  host: 'localhost', 
  port: 2407,    
};
const subscriber = new Redis(redisConfig);

const publisher = new Redis(redisConfig);

subscriber.on('connect', () => {
  console.log('Subscriber connected');
});

publisher.on('connect', () => {
  console.log('Publisher connected');  
});

module.exports = {
  subscriber,
  publisher  
};