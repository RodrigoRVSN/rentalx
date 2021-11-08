import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());

app.use('/categories', categoriesRoutes);

app.listen(PORT, () =>
  console.log(`🔥 Server running in http://localhost:${PORT} `),
);
