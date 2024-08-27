import ky from 'ky'

const method = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

// const printLogUrl = (request) => {
// console.log('request url', request.url)
// }

// const printLogResponse = async (request, instance, response) => {
// console.log('response', await response.json())
// }

const kyInstance = ky.create({
  prefixUrl: 'http://localhost:8080/v1/',
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    // beforeRequest: [printLogUrl],
    // afterResponse: [printLogResponse],
    // beforeError: [],
  },
  retry: {
    limit: 0,
    methods: ['get', 'post', 'put'],
    statusCodes: [500],
  },
})

export { method, kyInstance }
