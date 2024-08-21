import ky from 'ky'

const method = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

const kyInstance = ky.create({
  prefixUrl: 'http://localhost:8080/v1/',
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
})

export { method, kyInstance }
