const btn  = document.querySelector("button");

const passwordInput = document.getElementById('password');
const hitMeBtn = document.getElementById('hitMeBtn');

let timeoutId;

const distBtw = (p1x, p1y, p2x, p2y) =>{
    const dx = p1x-p2x;
    const dy = p1y - p2y;
    return Math.sqrt(dx*dx + dy *dy);
}

document.addEventListener("mousemove", (event)=>{
    const rad = Math.max(
        btn.offsetWidth * 0.75,
        btn.offsetHeight * 0.75,
        100
    );
    const bx = btn.parentNode.offsetLeft + btn.offsetLeft
    + btn.offsetWidth / 2;

    const by = btn.parentNode.offsetTop +
    btn.offsetTop +
    btn.offsetHeight / 2;

    const distance = distBtw(event.clientX,
        event.clientY, bx, by);
    const angle = Math.atan2(event.clientY - by,
        event.clientX - bx);
    
    const ox = -1 * Math.cos(angle) * Math.max(rad - distance, 0);
    const oy = -1 * Math.sin(angle) * Math.max(rad - distance, 0);

    const rx = oy / 2;
    const ry = -ox / 2;

    btn.style.transition = `all 0.1s ease`;
    btn.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    btn.style.boxShadow = `0px ${Math.abs(oy)}px ${
        (Math.abs(oy)/rad) * 40
    }px rgba(0,0,0,0.15)`;

});

passwordInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    if (timeoutId) {
    clearTimeout(timeoutId);
  }
      hitMeBtn.textContent = 'No Cheating 😡🙅‍♀️';
      timeoutId = setTimeout(() => {
        hitMeBtn.textContent = 'Hit Me! 😜';
    }, 800);
  }
});