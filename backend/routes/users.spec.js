import request from 'supertest'
import app from '../src/index.js';

describe('Test users', () =>{
    it('test router signup', async () =>{
        const res = await request(app)
        .post('/users/signup')
        .send(
            {
                email: 'test@tesdt2.com',
                password: 'test123',
                name: 'teste'
            }
        )
        expect(res.statusCode);
        expect(res.body).toHaveProperty('message');
    });

    it('test router login', async () =>{
        const res = await request(app)
        .post('/users/login')
        .send(
            {
                email: 'test@tesdt2.com',
                password: 'test123'
            }
        )
        expect(res.statusCode);
        expect(res.body).toHaveProperty('message');
    });
});