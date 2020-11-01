import { handler } from '../src/getProductsList'

describe('product search by id', () => {
  test('status 200 is returned', async () => {
    const result = await handler()

    expect(result.statusCode).toBe(200)
  })

  test('headers are present', async () => {
    const result = await handler()

    expect(result.headers).toMatchObject({
      'Access-Control-Allow-Origin': 'https://dg3nobhi8x5wz.cloudfront.net',
      'Access-Control-Allow-Credentials': true
    })
  })

  test('returns list of products', async () => {
    const result = await handler()

    const body = JSON.parse(result.body)
    expect(body).toHaveLength(8)
    expect(body).toContainEqual(expect.objectContaining({
      "title": "Shimano Syncopate"
    }))
  })
})
