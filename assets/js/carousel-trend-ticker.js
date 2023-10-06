const tickcontainer = document.querySelector('#carousel-trend-ticker');
                
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

tickcontainer.addEventListener('mousedown',e => mouseIsDown(e));  
tickcontainer.addEventListener('mouseup',e => mouseUp(e))
tickcontainer.addEventListener('mouseleave',e=>mouseLeave(e));
tickcontainer.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startY = e.pageY - tickcontainer.offsetTop;
  startX = e.pageX - tickcontainer.offsetLeft;
  scrollLeft = tickcontainer.scrollLeft;
  scrollTop = tickcontainer.scrollTop; 
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    
    //Move Horizontally
    const x = e.pageX - tickcontainer.offsetLeft;
    const walkX = x - startX;
    tickcontainer.scrollLeft = scrollLeft - walkX;

  }
}