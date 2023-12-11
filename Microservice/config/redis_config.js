const Redis = require('ioredis');
const redisConfig = {
  host: 'redis',
  port: 6379,    
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