window.addEventListener("load", start, false);
document.addEventListener("mouseover", mouseover, false);
function start() {
    document.getElementById("why").addEventListener("mousemove", move, false);
    document.getElementById("new1").addEventListener("mouseover", over1, false);
    document.getElementById("new1").addEventListener("mouseout", out1, false);
}
function move() {
    document.getElementById("why").innerHTML = "Why choose TripsAway?";
}
function mouseover() {
    document.getElementById("read").innerHTML = "Make time for yourself."
}
function over1() {
    document.getElementById("new1").setAttribute("src","fp1.jpg");
  }

  function out1() {
    document.getElementById("new1").setAttribute("src", "fp2.jpg");
  }

