"use strict";
var directions;
(function (directions) {
    directions[directions["north"] = 1] = "north";
    directions[directions["east"] = 2] = "east";
    directions[directions["west"] = 3] = "west";
    directions[directions["south"] = 4] = "south";
})(directions || (directions = {}));
console.log(directions.east);
var direction;
(function (direction) {
    direction["north"] = "north";
    direction["east"] = "east";
    direction["west"] = "west";
    direction["south"] = "south";
})(direction || (direction = {}));
