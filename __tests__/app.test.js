const app = require('../app');
const request = require('supertest');

describe('GET /movie', () => {
  describe('Get the movies', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get('/movie').send();
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('POST /movie', function () {
  it('movie-title should be an case-insensitive', async () => {
    const response = await request(app).post('/movie').send({
      title: 'Palmer',
      director: 'Fisher Stevens',
      release_date: '2021-09-27',
    });
    expect(response.statusCode).toBe(201);
  });
});

describe('DELETE /movie/:id', function () {
  it('movie should be deleted', async () => {
    const response = await request(app).delete('/movie/1');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Movie is deleted');
  });
});
