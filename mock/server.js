import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/category', (req, res) => {
    res.json({
        code: 0,
        message: 'success',
        data: [
            { id: 1, name: '居家' },
            { id: 2, name: '美食' },
            { id: 3, name: '服饰' },
        ],
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Mock server running at http://localhost:${PORT}`);
});
