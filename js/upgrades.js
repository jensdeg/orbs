function buymainupgrade(){
    if(this.player.mainupgrade.cost > this.player.blue_orbs) return
    this.player.blue_orbs -= this.player.mainupgrade.cost
    this.player.mainupgrade.cost *= 1 + (10 + this.player.mainupgrade.bought) *0.25
    this.player.mainupgrade.bought += 1
    this.player.mainupgrade.current_multiplier *= this.player.mainupgrade.multiplier
}

