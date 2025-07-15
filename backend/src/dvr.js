const fs = require('fs');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3Client = new S3Client({ region: 'us-east-1' });
async function uploadToS3(filePath, key) {
  const stream = fs.createReadStream(filePath);
  await s3Client.send(new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: stream
  }));
}

const b2Client = new S3Client({
  region: 'us-west-002',
  endpoint: 'https://s3.us-west-002.backblazeb2.com'
});
async function uploadToB2(filePath, key) {
  const stream = fs.createReadStream(filePath);
  await b2Client.send(new PutObjectCommand({
    Bucket: process.env.B2_BUCKET,
    Key: key,
    Body: stream
  }));
}

module.exports = { uploadToS3, uploadToB2 };
