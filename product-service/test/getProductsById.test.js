import { handler } from '../src/getProductsById'

const EXISTING_PRODUCT_ID = {
  pathParameters: {
    productId: '7D2CA80F-4692-448E-B0A9-BD8D47DFCD26'
  }
}

const BAD_PRODUCT_ID = {
  pathParameters: {
    productId: 'BAD_PRODUCT_ID'
  }
}

describe('product list', () => {
  test('status 200 is returned', async () => {
    const result = await handler(EXISTING_PRODUCT_ID)

    expect(result.statusCode).toBe(200)
  })

  test('headers are present', async () => {
    const result = await handler(EXISTING_PRODUCT_ID)

    expect(result.headers).toMatchObject({
      'Access-Control-Allow-Origin': 'https://dg3nobhi8x5wz.cloudfront.net',
      'Access-Control-Allow-Credentials': true
    })
  })

  test('returns product with specified if', async () => {
    const result = await handler(EXISTING_PRODUCT_ID)

    const body = JSON.parse(result.body)
    expect(body).toHaveLength(1)
    expect(body).toContainEqual(expect.objectContaining({
      id: '7D2CA80F-4692-448E-B0A9-BD8D47DFCD26',
      title: 'Shimano Syncopate'
    }))
  })

  test('returns 404 if product is not found', async () => {
    const result = await handler(BAD_PRODUCT_ID)

    expect(result.statusCode).toBe(404)
  })
})
