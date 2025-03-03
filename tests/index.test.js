const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('status');
      expect(res.body).toHaveProperty('version');
    });
  });

  describe('404 handling', () => {
    it('should return 404 for undefined routes', async () => {
      const res = await request(app).get('/undefined-route');
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('error');
    });
  });
});