(function postClickDrag() {
    const slider = document.querySelector('.footer-posts');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('click', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });
})()

function copyToClip(){
    const text = document.getElementById('privacy-text').innerText;
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard');
}

