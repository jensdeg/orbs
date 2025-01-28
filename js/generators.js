function buyredgenerator(i, that){
    let g = that.player.r_generators[i]
        if (g.cost > that.player.red_orbs) return
        that.player.red_orbs -= g.cost
        that.player.r_generators[i].cost *= 1 + (i+1)*0.25
        that.player.r_generators[i].amount += 1
        that.player.r_generators[i].bought += 1
        if(that.player.r_generators[i].bought % 10 === 0){
          that.player.r_generators[i].mult *= 2
        }
}
function buygreengenerator(i, unlock, that){
  if(that.player.number < unlock) return
    let g = that.player.g_generators[i]
    if (g.cost <= that.player.green_orbs){
      that.player.green_orbs -= g.cost
      that.player.g_generators[i].cost *= 1 + (i+1)*0.25
      that.player.g_generators[i].amount += 1
      that.player.g_generators[i].bought += 1
      if(that.player.g_generators[i].bought % 10 === 0){
        that.player.g_generators[i].mult *= 2
      }
    } 
}
function buybluegenerator(i, unlock, that){
  if(that.player.number < unlock) return
  let g = that.player.b_generators[i]
  if (g.cost <= that.player.blue_orbs){
    that.player.blue_orbs -= g.cost
    that.player.b_generators[i].cost *= 1 + (i+1)*0.25
    that.player.b_generators[i].amount += 1
    that.player.b_generators[i].bought += 1
    if(that.player.b_generators[i].bought % 10 === 0){
      that.player.b_generators[i].mult *= 2
    }
  } 
}

