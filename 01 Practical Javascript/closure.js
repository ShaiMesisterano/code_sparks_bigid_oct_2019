function Counter() {
    let count = 0;
    function increase() {
        count++;
    }
    function displayCount() {
        console.log(count);
    }
    return {
        increase: increase,
        displayCount: displayCount
    }
}

let c = new Counter();
c.increase();
c.increase();
c.displayCount();