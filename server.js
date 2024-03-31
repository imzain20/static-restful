const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample Endpoint
app.get('/api/sample', (req, res) => {
    res.json({ message: 'This is a sample API endpoint!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
