

import supertest from "supertest";
import app from '../index';


const request = supertest(app)

//check api/images response of endpoint

describe('test api end point', () => {
    it('gets the api/images endpoint ', async (done) => {
        const res = await request.get('/api/images')
        expect(res.status).toBe(200)
        done()
    })
})
