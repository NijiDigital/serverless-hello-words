const randomWords = require('random-words')

const handler = async (event, context) => {
  const { length } = event.queryStringParameters
  console.log('length param:', length)
  console.log('aws request ID:', context.awsRequestId)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: randomWords({ exactly: Number(length), join: ' ' }),
    }),
  }
}

module.exports = { handler }
