
// const slider = document.querySelector('.footer-posts');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('click', (e) => {
//     isDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//     console.log(e.pageX);
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     console.log(e.pageX)
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 10; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;
// });

function copyToClip(){
    const text = document.getElementById('privacy-text').innerText;
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard');
}

