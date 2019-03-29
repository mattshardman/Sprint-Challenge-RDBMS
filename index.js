const express = require('express');
const helmet = require('helmet');
const app = express();

const { actionRoutes, projectRoutes, contextRoutes, errorHandler } = require('./routes');

app.use(helmet());
app.use(express.json());

app.use(projectRoutes);
app.use(actionRoutes);
app.use(contextRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));