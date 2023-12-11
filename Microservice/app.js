// const express = require('express');
// const {subscriber, publisher} = require('./config/redis_config');
// const { getFileFromS3 } = require('./services/s3_services');
// const config = require('./config/config');
// const app = express();
// let filenames = [];

// subscriber.subscribe(config.redis.subscriber);
// subscriber.on('message', async (channel, message) => {
//   if (filenames.includes(message)) {
//     console.log("Name already exists");
//   }
//   else{
//     filenames.push(message);
//     console.log(`Received ${message} on ${channel}`);
//   }
// })



// app.get('/pdf/:filename', async (req, res) => {
//   try {
//       const filename = req.params.filename;
//       if(filenames.includes(filename)){
//         res.send("Filename already exists");
//       }
//       else{
//       publisher.publish(config.redis.publisher, `${filename}`);
//       filenames.push(filename);
//       res.send("Message published to Redis channel");
//       }
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Failed');
//   }
// });



// app.get('/file/:filename', async (req, res) => {
//   const filename = req.params.filename;
//   if(!filenames.includes(filename)){
//     res.send("File doesn't exist");
//   }
//   else{
//     const file = await getFileFromS3(req.params.filename);
//     res.send(file);
//   }
// })


// app.listen(config.server.port, () => {
//   console.log(`PDF microservice listening on port ${config.server.port}!`);
// });
const { subscriber , publisher} = require('./config/redis_config');
const createPDF = require('./services/pdf.generator');
const { uploadToS3 } = require('./services/s3_services');
const config = require('./config/config');
const express = require('express');
const app = express();

let messages = [];
subscriber.subscribe(config.redis.subscriber);

subscriber.on('message', async (channel, message) => {
  if (messages.includes(message)) {
    console.log("Name Is already exists on Server 2"); 
  }
  else{
    messages.push(message);
    const pdfBytes = await createPDF("Hello ",`${message}`);
    await uploadToS3(pdfBytes,`${message}`);
    publisher.publish(config.redis.publisher, `${message}`);
  }
  console.log(messages)

});

app.listen(config.server.port, () => {
  console.log(`PDF microservice listening on port ${config.server.port}!`);
});