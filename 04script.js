// for one element
// var elem1 = document.querySelector("#elem1")
// var elem1Image = document.querySelector("#elem1 img")

// elem1.addEventListener('mousemove', function(dets) {
//     elem1Image.style.left = dets.x + "px"
//     elem1Image.style.top = dets.y + "px"
// })

// elem1.addEventListener('mouseenter', function(dets) {
//     elem1Image.style.opacity = 1
// })

// elem1.addEventListener('mouseleave', function(dets) {
//     elem1Image.style.opacity = 0
// })

// for multiple element selection

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  // console.log(val.childNodes[3])
  val.addEventListener("mouseenter", function () {
      // val.style.backgroundColor = 'red'
      val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", function () {
        // val.style.backgroundColor = 'transparent'
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", function (dets) {
      val.childNodes[3].style.left = dets.x + "px";
    //   val.childNodes[3].style.top = dets.y + "px";
    });
});
