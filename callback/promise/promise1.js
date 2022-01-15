let doWork = function (job, timer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`完成工作 ${job}`); 
         }, timer);
    });
  };
  let dt = new Date();
console.log(`Start ${dt.toISOString()}`);
doWork("刷牙", 2000)
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);

    return doWork("吃早餐", 3000);
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
    return doWork("寫功課", 2000);
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
  })
  .catch((err) => {
    // 處理錯誤
    console.error(err);
  });