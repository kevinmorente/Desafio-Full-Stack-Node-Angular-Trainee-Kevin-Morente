import request from 'supertest'
import app from '../src/index.js';

describe('Test ToDoListk', () =>{
    it('test router  addtask', async () =>{
        const res = await request(app)
        .post('/list/addtask')
        .send(
            {
                task: 'testando a task',
                priority: '1'
            }
        )
        console.log(res.body);
        expect(res.statusCode);
    });

    it('test router  gettask', async () =>{
        const res = await request(app)
        .get('/list/gettask')
        console.log(res.body);
        expect(res.statusCode);
    });

    it('test router  deletetask', async () =>{
        const res = await request(app)
        .get('/list/deletetask')
        console.log(res.body);
        expect(res.statusCode);
    });

    it('test router  updatetask', async () =>{
        const res = await request(app)
        .get('/list/updatetask')
        console.log(res.body);
        expect(res.statusCode);
    });
});