
function openSideBar() {
    if (window.innerWidth <= 350) {
        document.getElementById("sidebar").style.width = "300px";
    }

    else if (window.innerWidth <= 300) {
        document.getElementById("sidebar").style.width = "250px";
    } else {
        document.getElementById("sidebar").style.width = "350px";
    }
  }
  
  function closeSideBar() {
    document.getElementById("sidebar").style.width = "0";
  }