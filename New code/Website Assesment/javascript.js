window.onscroll = function() {scrollFunction()}; // Create the function to resize navbar on scroll

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { // If user has scrolled 80px !!! You can change this to suit you !!!
      document.getElementById("header").style.padding = "30px 10px"; // Change padding !!! You can change this to suit you !!!
      document.getElementById("header").style.fontSize = "25px"; // Shrink font size !!! You can change this to suit you !!!
      document.getElementById("header").style.width = "100%" // Change the width of the navbar (Recommended you keep it to 100% for clean look and adaptive sizing)
      document.getElementsByClassName("witcher-logo").style.transform = "scale(50%)"
    } else { // If user has NOT scrolled 80px !!! You can change this to suit you !!!
      document.getElementById("header").style.padding = "80px 10px"; // Change padding !!! You can change this to suit you !!!
      document.getElementById("header").style.fontSize = "35px"; // Font size !!! You can change this to suit you !!!
      document.getElementById("header").style.width = "100%" // Change the width of the navbar (Recommended you keep it to 100% for clean look and adaptive sizing)
    }
  }
  