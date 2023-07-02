let playerone = 1
let playertwo = 1
const btn = document.getElementById("btn")
let tries = 0

function random(){
    playerone = Math.floor(Math.random() * 6) + 1
    playertwo = Math.floor(Math.random() * 6) + 1
    console.log(playerone, playertwo)
}

function roll(){
    random()
    document.getElementById("p1").innerHTML = playerone
    document.getElementById("p2").innerHTML = playertwo
    tries ++
    document.getElementById("tries").innerHTML = `tries : ${tries}`
        function ifi(){
    if(playerone == 3 && playertwo ==3){
        document.getElementById("p1").innerHTML = 1
        document.getElementById("p2").innerHTML = 1
        document.getElementById("tries").innerHTML = `tries : 0`
        alert(`draw, try again`)
        tries = 0

    } else if(playertwo == 3){
        document.getElementById("p1").innerHTML = 1
        document.getElementById("p2").innerHTML = 1
        document.getElementById("tries").innerHTML = `tries : 0`
        alert(`player two won the game in ${tries} tries`)
        tries = 0
    } else if(playerone ==3){
        document.getElementById("p1").innerHTML = 1
        document.getElementById("p2").innerHTML = 1
        document.getElementById("tries").innerHTML = `tries : 0`
        alert(`player one won the game in ${tries} tries`)
        tries = 0
        
    }
    }
    setTimeout(ifi, 100)
}

btn.addEventListener('click', roll)

