const container = document.querySelector('#ticker-container');
                
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop; 
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
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}