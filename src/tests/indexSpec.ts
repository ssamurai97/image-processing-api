import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

//check api/images response of endpoint

describe('test api end point', () => {
  it('gets the api/images endpoint ', async (done) => {
    const res = await request.get('/api/images')
    expect(res.status).toBe(200)
    done()
  })
})

describe('test default endpoint', () => {
  it('gets the   http://localhost:3000/api/images?filename=santamonica&width=400&height=200', async (done) => {
    const res = await request.get(
      '/api/images?filename=santamonica&width=400&height=200'
    )
    expect(res.status).toBe(200)
    done()
  })
})
