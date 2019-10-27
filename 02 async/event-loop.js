function foo() {
    console.log("foo");
}

function bar() {
    foo();
    // console.log("bar");
    setTimeout(function () {
        console.log("bar");
    }, 0);
    for (let i=0; i<5000000000; i++){}
    console.log("end");
    setTimeout(function () {
        console.log("benny the winner");
    }, 2000);
}

bar();