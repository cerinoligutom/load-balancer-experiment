const express = require('express');
const app = express();

const port = process.env.PORT;
let count = 0;

app.listen(port, () => console.log(`Listening on port ${port}.`));

app.get('/hi', (req, res) => {
	console.log(`Received from port ${port}. Counter = ${++count}`);
	console.log(req.headers);
	res.send(`Hello from port ${port}.\n`);
});
