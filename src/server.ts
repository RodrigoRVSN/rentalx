import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerConfig from '../swagger.json';
import { router } from './routes';

import './database';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(router);

app.listen(PORT, () =>
  console.log(`🔥 Server running in http://localhost:${PORT} `),
);
