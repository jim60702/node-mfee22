const axios = require('axios');

axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220109&stockNo=2324&_=1641717472401')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  

