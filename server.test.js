const request = require('supertest');
const app = require('./server'); // Assuming your server file is named server.js

describe('Sample API Tests', () => {
  it('responds with JSON message', async () => {
    const response = await request(app).get('/api/sample');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'This is a sample API endpoint!' });
  });
});
