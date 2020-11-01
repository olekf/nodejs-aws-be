import productList from './data/productList.json'

export const handler = async event => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://dg3nobhi8x5wz.cloudfront.net',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(productList)
  }
}
