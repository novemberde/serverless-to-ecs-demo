import App from '../App';
import * as Should from 'should';
import * as request from 'supertest';

process.env.NODE_ENV = "development";

const server = new App().app;

describe('POST /', () => {
    it('should return 200 status code', (done) => {
        request(server)
        .get('/todo')
        .expect(200)
        .end((err, res) => {
            if (err) throw err;
            console.log(res.body);

            done();
        });
    });
});