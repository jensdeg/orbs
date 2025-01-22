function buyredgenerator(i){
    let g = this.player.r_generators[i]
        if (g.cost > this.player.red_orbs) return
        this.player.red_orbs -= g.cost
        this.player.r_generators[i].cost *= 1 + (i+1)*0.25
        this.player.r_generators[i].amount += 1
        this.player.r_generators[i].bought += 1
        if(this.player.r_generators[i].bought % 10 === 0){
          this.player.r_generators[i].mult *= 2
        }
}
function buygreengenerator(i, unlock){
  if(player.number < unlock) return
    let g = this.player.g_generators[i]
    if (g.cost <= this.player.green_orbs){
      this.player.green_orbs -= g.cost
      this.player.g_generators[i].cost *= 1 + (i+1)*0.25
      this.player.g_generators[i].amount += 1
      this.player.g_generators[i].bought += 1
      if(this.player.g_generators[i].bought % 10 === 0){
        this.player.g_generators[i].mult *= 2
      }
    } 
}
function buybluegenerator(i, unlock){
  if(player.number < unlock) return
  let g = this.player.b_generators[i]
  if (g.cost <= this.player.blue_orbs){
    this.player.blue_orbs -= g.cost
    this.player.b_generators[i].cost *= 1 + (i+1)*0.25
    this.player.b_generators[i].amount += 1
    this.player.b_generators[i].bought += 1
    if(this.player.b_generators[i].bought % 10 === 0){
      this.player.b_generators[i].mult *= 2
    }
  } 
}

