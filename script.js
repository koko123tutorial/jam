setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('jam')
    var audio = new Audio("suarajam.mp3");
    clock.innerHTML =
        date.getHours()+":"+
        date.getMinutes()+":"+
        date.getSeconds()
        audio.play();
}, 1000);