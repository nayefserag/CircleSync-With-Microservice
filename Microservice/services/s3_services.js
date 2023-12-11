const fs = require('fs');
const { S3Client, PutObjectCommand , GetObjectCommand  } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const config = require('../config/config.js');
const s3 = new S3Client({
    credentials: {
        accessKeyId: config.redis.accessKeyId,
        secretAccessKey: config.redis.secretAccessKey,
        
    },
  region: 'us-east-1'
});
async function uploadToS3(file,name) {
    // const fileStream = fs.createReadStream(`./pdf/${name}.pdf`);
    const uploadParams = {
      Bucket: 'bucket-nayf',
      Body: file,
      Key: `${name}.pdf`,
    }
    const command = new PutObjectCommand(uploadParams);
    await s3.send(command);
    console.log('File uploaded successfully');
    return true
}

async function getFileFromS3(name) {
    const command = new GetObjectCommand ({
        Bucket: 'bucket-nayf',
        Key: `${name}.pdf`,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    return url
}
exports.getFileFromS3 = getFileFromS3
exports.uploadToS3 = uploadToS3