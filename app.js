const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(
    express.static(path.join(__dirname, '../html'))
);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/index.html'));
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '../html/404.html'));
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.json({ error: 'Not found' });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
