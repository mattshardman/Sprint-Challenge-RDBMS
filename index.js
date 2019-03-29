const express = require('express');
const helmet = require('helmet');
const app = express();

const { actionRoutes, projectRoutes, errorHandler } = require('./routes');

app.use(helmet());

app.use(projectRoutes);
app.use(actionRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));