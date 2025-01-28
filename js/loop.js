function gameloop(that){
    let diff = (Date.now() - that.player.lastUpdate) / 1000

    //number
    let persec = ((1 * that.player.red_power * that.player.green_power * that.player.blue_power * that.player.mainupgrade.current_multiplier) *diff) /10000

    that.player.number += persec

    //red
    that.player.red_orbs += (that.player.r_generators[0].amount * that.player.r_generators[0].mult * that.player.mainupgrade.current_multiplier) * diff
    that.player.red_power += ((that.player.r_generators[0].amount * that.player.r_generators[0].mult * that.player.mainupgrade.current_multiplier) * diff) / 100
    that.player.r_generators[0].mult += ((that.player.r_generators[1].amount * that.player.r_generators[1].mult * that.player.mainupgrade.current_multiplier) * diff) / 100

    //green
    that.player.green_orbs += (that.player.g_generators[0].amount * that.player.g_generators[0].mult * that.player.mainupgrade.current_multiplier) * diff
    that.player.green_power += ((that.player.g_generators[0].amount * that.player.g_generators[0].mult * that.player.mainupgrade.current_multiplier) * diff) / 100
    that.player.g_generators[0].mult += ((that.player.g_generators[1].amount * that.player.g_generators[1].mult * that.player.mainupgrade.current_multiplier) * diff) / 100


    //blue
    that.player.blue_orbs += (that.player.b_generators[0].amount * that.player.b_generators[0].mult * that.player.mainupgrade.current_multiplier) * diff
    that.player.blue_power += ((that.player.b_generators[0].amount * that.player.b_generators[0].mult * that.player.mainupgrade.current_multiplier) * diff) / 100
    that.player.b_generators[0].mult += ((that.player.b_generators[1].amount * that.player.b_generators[1].mult * that.player.mainupgrade.current_multiplier) * diff) / 100

    that.player.lastUpdate = Date.now()
}


function Save(that){
    localStorage.setItem('player', JSON.stringify(that.player))
    console.log(localStorage.getItem('player'))
}