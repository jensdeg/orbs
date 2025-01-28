var player = {
    number: 10,
    red_power: 10,
    green_power: 10,
    blue_power: 10,
    red_orbs: 10,
    green_orbs: 10,
    blue_orbs: 10,
    r_generators: [],
    g_generators: [],
    b_generators: [],
    lastUpdate: Date.now(),
    mainupgrade: {}
}

player.mainupgrade = {
    current_multiplier: 1,
    multiplier: 2,
    cost: 1000,
    bought: 0
}

var r_generator_1 = {
    cost:10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: 'Red Orb Generator'
}
var r_generator_2 = {
    cost:100,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "'Red Orb Generator' Generator"
}

var g_generator_1 = {
    cost:10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: 'Green Orb Generator'
}
var g_generator_2 = {
    cost:100,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "'Green Orb Generator' Generator"
}

var b_generator_1 = {
    cost:10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: 'Blue Orb Generator'
}
var b_generator_2 = {
    cost:100,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "'Blue Orb Generator' Generator"
}

function Save(){
    localStorage.setItem('player', JSON.stringify(player))
    //console.log(localStorage.getItem('player'))
}

player.r_generators.push(r_generator_1)
player.r_generators.push(r_generator_2)
player.g_generators.push(g_generator_1)
player.g_generators.push(g_generator_2)
player.b_generators.push(b_generator_1)
player.b_generators.push(b_generator_2)
