function print1() {
    return new Promise( function (resolve, reject) {
        setTimeout(async function () {
            await getUserFromDB();
            resolve("1");
        }, 1000);
    } )
}

function print2() {
    return new Promise( function (resolve, reject) {
        reject("Some error inside print2");
        setTimeout(function () {
            resolve("2");
        }, 500);
    } )
}

function print3() {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve("3");
        }, 2000);
    } )
}

// async-await
async function init() {
    const data1 = await print1();
    console.log(data1);
    try{
        const data2 = await print2();
        console.log(data2);
        const data3 = await print3();
        console.log(data3);
    }
    catch(ex){
        console.error('Error', ex);
    }

}
init();

// promises
// print1()
//     .then( function (data) {
//         console.log(data);
//         return print2();
//     })
//     .then( function (data) {
//         console.log(data);
//         return print3();
//     }).then(( function (data) {
//         console.log(data);
//     }))
//     .catch(function (err) {
//         console.error(err)
//     });