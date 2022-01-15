const { readFile } = require("fs/promises");

// readFile("test.txt", "utf-8")



//( () => {} ) (); 立即執行

(async() =>{
    try{
        let result = await readFile("test.txt", "utf-8");
        console.log(`這是內建的 promise 版本 ${result}`);
    } catch (err){
        console.error(err);
    }
} )();

// readFile("test.txt", "utf-8")
//   .then((result) => {
//     console.log(`這是內建的 promise 版本 ${result}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });