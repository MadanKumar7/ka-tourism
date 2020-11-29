console.log("connected");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 && window.innerWidth>930) {
    document.getElementById("header").style.display="none";
  } else {
    document.getElementById("header").style.display = "block";
  }
}