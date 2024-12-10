const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server radi!');
});

app.listen(PORT, () => {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});
