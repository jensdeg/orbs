
const log = document.getElementById('app')
document.addEventListener('keypress', buymax)

function buymax(){
    buyredgenerator(0)
    buyredgenerator(1)
    buygreengenerator(0, 1000)
    buygreengenerator(1, 10000)
    buybluegenerator(0,100000)
    buybluegenerator(1, 1000000)
    buymainupgrade()
}