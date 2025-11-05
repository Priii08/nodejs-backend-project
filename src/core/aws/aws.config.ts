import { SQSClient } from '@aws-sdk/client-sqs';
import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

// Configure AWS SDK v3 clients
const awsConfig = {
  region: (process.env.AWS_REGION as string) ?? 'ap-south-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
};
// Export region for other services
export const AWS_REGION = awsConfig.region;

// Initialize SQS client
export const sqsClient = new SQSClient(awsConfig);

// Initialize S3 client
export const s3Client = new S3Client(awsConfig);
