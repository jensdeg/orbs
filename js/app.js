const app = Vue.createApp({
    data() {
      return{
        player: player
      }   
    },
    methods:{
      buyredgenerator: function(i){
        buyredgenerator(i, this)
      },
      buygreengenerator: function(i, unlock){
        buygreengenerator(i, unlock, this)
      },
      buybluegenerator: function(i, unlock){
        buybluegenerator(i, unlock, this)
      },
      buymainupgrade(){
        buymainupgrade(this)
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
      },
      Save(){
        Save(this)
      },
      Reset(){
        Reset()
      }
    },
    mounted(){
      Load(this)
      setInterval(this.gameloop, 50)
      setInterval(this.Save, 3000)
    }
  }).mount('#app')



