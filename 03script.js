var main = document.querySelector("#main")

var cursormove = document.querySelector("#cursor")

// move cursor around main div
main.addEventListener('mousemove', function(dets){
    // console.log(dets)
    cursormove.style.left = dets.x + "px"
    cursormove.style.top = dets.y + "px"
})