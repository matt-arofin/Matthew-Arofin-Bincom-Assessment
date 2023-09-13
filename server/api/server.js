import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet'; // enhance security
// import apiRoutes from './routes/apiRoutes';

dotenv.config();

const server = express();
const port = process.env.PORT || 3000;

server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use('/api', apiRoutes);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

