const team = {
    coach: "Zinadine Zidane",
    color: "white",
    players: [
        {number: "9", name: "Karim Benzema"},
        {number: "10", name: "Eden Hazard"},
        {number: "25", name: "Vinicuis Junior"}
    ]
};

// function displayPlayers(prefix, suffix) {
//     this.players.forEach(function (player)  {
//         console.log(prefix, player.number, player.name, suffix);
//     });
// }

// displayPlayers.call(team, "Player: ", "!!!");
// displayPlayers.apply(team, ["Player: ", "!!!"]);

// const add = (num1, num2) => num1 + num2;
function add(num1, num2) {
    return num1 + num2;
}
const add4 = add.bind(null, 4);
console.log(add4(5));