import * as awsServerlessExpress from 'aws-serverless-express';
import App from './App';

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/x-font-ttf',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'font/woff',
  'font/woff2',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
];
const server = awsServerlessExpress.createServer(new App().app, null, binaryMimeTypes);

module.exports.admin = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
}