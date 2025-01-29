let resetting = false;

function Save(that){
    localStorage.setItem('player', JSON.stringify(that.player))     
}

function Load(that){
    if(localStorage.getItem('player')){
        that.player = JSON.parse(localStorage.getItem('player'));
    }
}

function Reset(){
    if(confirm("are you sure you want to reset all your progress?")){
        localStorage.clear()
        location.reload()
    }
}