const axios = require('axios');

axios.get('http://cap-sg-prd-2.integration.ibmcloud.com:16598/catalog/items/0030')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('http://cap-sg-prd-2.integration.ibmcloud.com:16598/catalog/items?startItemID=0010')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });