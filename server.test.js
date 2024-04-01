const request = require('supertest');
const app = require('./server'); 

describe('Sample API Tests', () => {
  it('responds with JSON message', async () => {
    const response = await request(app).get('/api/sample');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'This is a sample API endpoint!' });
  });
});
