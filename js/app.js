const app = Vue.createApp({
    data() {
      return{
        player: player
      }   
    },
    methods:{
      buyredgenerator: function(i){
        buyredgenerator(i)
      },
      buygreengenerator: function(i, unlock){
        buygreengenerator(i, unlock)
      },
      buybluegenerator: function(i, unlock){
        buybluegenerator(i, unlock)
      },
      buymainupgrade(){
        buymainupgrade()
      },
      format(amount){
        return format(amount)
      },
      format2(amount){
        return format2(amount)
      },
      percentage(number){
        return percentage(number)
      },
      gameloop(){
        gameloop(this)
      }
    },
    mounted(){
      setInterval(this.gameloop, 50)
    }
  }).mount('#app')



