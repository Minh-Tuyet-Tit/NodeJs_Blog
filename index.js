const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Helloworld' });
});

app.listen(5001, () => {
    console.log('server listening on port 5001');
});
