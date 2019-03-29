const express = require('express');
const app = express();

app.post('/api/projects', (req, res) => {
    
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));