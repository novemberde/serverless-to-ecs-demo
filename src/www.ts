import * as http from 'http';
import App from './App';

require('source-map-support').install();

const port = process.env.NODE_ENV || 3000;
const server = new App().app;

http.createServer(server).listen(port).on('listening', () =>{
  console.log(`Server is running on ${port}`);
}).on('error', err => console.error(err));