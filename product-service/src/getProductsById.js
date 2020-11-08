import productList from './data/productList.json'

export const handler = async event => {
  const searchResult = productList
    .filter(product => product.id === event.pathParameters.productId)

  return {
    statusCode: searchResult.length === 0 ? 404 : 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://dg3nobhi8x5wz.cloudfront.net',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(searchResult)
  }
}
