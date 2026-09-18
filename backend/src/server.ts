import { createApp } from './app.js';

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Airbnb Listing API server running at http://localhost:${PORT}`);
});
