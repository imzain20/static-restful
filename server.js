const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample Endpoint
app.get('/api/sample', (req, res) => {
    res.json({ message: 'This is a sample API endpoint!' });
});

// Export the app for testing purposes
module.exports = app;

// Start the server only if it's not being required by a test script
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
