import express from 'express';

const app = express();
app.use(express.json());
app.listen(5080, () => console.log('Server running on port 5080'));
