let doWork = function (job, timer, callback) {
    setTimeout(() => {
      // callback 的設計上
      // 通常第一個參數會是錯誤
      // 通常第二個參數會是結果
      callback(null, `完成工作 ${job}`);
    }, timer);
  };
  
  
  let dt = new Date();
  console.log(`Start ${dt.toISOString()}`);
  doWork("刷牙", 2000, (err, result) => {
    
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
    doWork("吃早餐", 3000, (err, result) => {
      let dt = new Date();
      console.log(`${result} at ${dt.toISOString()}`);
  
      doWork("寫功課", 2000, (err, result) => {
        let dt = new Date();
        console.log(`${result} at ${dt.toISOString()}`);
      });
    });
  });