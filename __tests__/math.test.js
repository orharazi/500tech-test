const request = require('supertest');
const app = require('../app');

describe('GET /api/math', function() {
  test('correctly parse exmaple 1', function(done) {
    request(app)
      .get('/api/math/ADD')
			.query({ firstNumber: '3', secondNumber: '7'})
			.expect('Content-Type', /json/)
      .expect(200, {calc: 10}, done)
  });
	test('correctly parse exmaple 2', function(done) {
    request(app)
      .get('/api/math/DIVIDE')
			.query({ firstNumber: '100', secondNumber: '5'})
			.expect('Content-Type', /json/)
      .expect(200, {calc: 20}, done)
  });
	test('correctly parse exmaple 3', function(done) {
    request(app)
      .get('/api/math/ADD1')
			.query({ firstNumber: '3', secondNumber: '7'})
      .expect(400, done)
  });
	test('correctly parse exmaple 4', function(done) {
    request(app)
      .get('/api/math/ADD')
			.query({ firstNumber: 'A', secondNumber: '7'})
      .expect(400, done)
  });

});