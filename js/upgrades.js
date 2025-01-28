function buymainupgrade(that){
    if(that.player.mainupgrade.cost > that.player.blue_orbs) return
    that.player.blue_orbs -= that.player.mainupgrade.cost
    that.player.mainupgrade.cost *= 1 + (10 + that.player.mainupgrade.bought) *0.25
    that.player.mainupgrade.bought += 1
    that.player.mainupgrade.current_multiplier *= that.player.mainupgrade.multiplier
}

