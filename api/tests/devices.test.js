import devices from '../routes/devices';
import regeneratorRuntime from "regenerator-runtime";

const database = [
  {
    "id": "36f0f0e8-e7ed-11eb-ba80-0242ac130004",
    "name": "Alice",
    "description": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ",
    "disabled": true
  },
  {
    "id": "3fe45398-e7ed-11eb-ba80-0242ac130004",
    "name": "Bob",
    "description": "Lorem Ipsum",
    "disabled": false
  },
  {
    "id": "461d90d0-e7ed-11eb-ba80-0242ac130004",
    "name": "Carol",
    "description": "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
    "disabled": true
  },
  {
    "id": "4d228232-e7ed-11eb-ba80-0242ac130004",
    "name": "Marta",
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    "disabled": true
  },
  {
    "id": "4d228232-e7ed-11eb-ba80-0242bc130004",
    "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "disabled": false
  }
]

const someDeviceMock = {
  "id": "3fe45398-e7eo-11eb-ba80-0242ac130004",
  "name": "test",
  "description": "Lorem Ipsum",
  "disabled": false
}

const putDeviceMock = {
  "id": "3fe45398-e7ed-11eb-ba80-0242ac130004",
  "name": "Bobek",
  "description": "Lorem Ipsum",
  "disabled": false
}


const request = require('supertest')
const app = require('../app')

describe('Get Endpoints', () => {
  it('should get new devices', async () => {
    const res = await request(app)
      .get('/api/get')
    expect(res.statusCode).toEqual(200)
  })


    it('should get new devices like in mock', async () => {
      const res = await request(app)
        .get('/api/get')
      expect(res.body.devices).toEqual(database)
    })
  })

  describe('Put Endpoints', () => {
    it('should put device', async () => {
      const res = await request(app)
        .put('/api/put')
        .send({
          "id": "3fe45398-e7ed-11eb-ba80-0242ac130004",
          "name": "Bobek",
          "description": "Lorem Ipsum",
          "disabled": false
        })
      expect(res.statusCode).toEqual(200)
      expect(res.body.device).toEqual(putDeviceMock)
    })
  })

describe('Post Endpoints', () => {
  it('should create a new device', async () => {
    const res = await request(app)
      .post('/api/post')
      .send({
        "id": "3fe45398-e7eo-11eb-ba80-0242ac130004",
        "name": "Bob-test",
        "description": "Lorem Ipsum",
        "disabled": false
      })
    expect(res.statusCode).toEqual(200)
  })

  it('should not create a new device, because name is required', async () => {
    const res = await request(app)
      .post('/api/post')
      .send({
        "id": "3fe45398-e7eo-11eb-ba80-0242ac130004",
        "name": "",
        "description": "Lorem Ipsum",
        "disabled": false
      })
    expect(res.statusCode).toEqual(400)
  })

  it('should not create a new device, because disabled has wrong type', async () => {
    const res = await request(app)
      .post('/api/post')
      .send({
        "id": "3fe45398-e7eo-11eb-ba80-0242ac130004",
        "name": "koyh",
        "description": "Lorem Ipsum",
        "disabled": "T"
      })
    expect(res.statusCode).toEqual(400)
  })

  it('should create a new device, and return it', async () => {
    const res = await request(app)
      .post('/api/post')
      .send({
        "id": "3fe45398-e7eo-11eb-ba80-0242ac130004",
        "name": "test",
        "description": "Lorem Ipsum",
        "disabled": false
      })
   expect(res.body.device).toEqual(someDeviceMock)
  })
})

describe('Delete Endpoints', () => {
  it('should delete device', async () => {
    const res = await request(app)
      .delete('/api/delete')
      .send({
        "id": "3fe45398-e7eo-11eb-ba80-0242ac130004",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('should delete device and return id', async () => {
    const res = await request(app)
      .delete('/api/delete')
      .send({
        "id": "461d90d0-e7ed-11eb-ba80-0242ac130004",
      })
    expect(res.body.deviceId).toEqual("461d90d0-e7ed-11eb-ba80-0242ac130004")
  })

  it('should not delete device because id not exist', async () => {
    const res = await request(app)
      .delete('/api/delete')
      .send({
        "id": "xxe45398-e7eo-11eb-ba80-0242ac130004",
      })
      expect(res.statusCode).toEqual(404)
  })
})


