const axios = require('axios')
const config = {
  header: {
    'User-Agent': 'axios app',
  },
}
module.exports = function () {
  axios
    .get(
      `https://cdn-api.co-vin.in/api/v2/admin/location/states
    `,
      config
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally()
}
