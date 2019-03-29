const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));