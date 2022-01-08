const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/teapot', (req, res) => {
	res
		.status(418)
		.set('X-Oida', 'is des org')
		.send('I\'m a teapot!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

