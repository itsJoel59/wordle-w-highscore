import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5080;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send('Server up and running!');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
