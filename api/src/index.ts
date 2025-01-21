import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  return 'Hello, World';
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
