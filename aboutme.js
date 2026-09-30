const me = document.querySelector(".me");
me.addEventListener("mousemove", (e)=> {
    const rect = me.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;


    me.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.01)
    `;
    });


me.addEventListener("mouseleave", () =>{
    me.style.transform = `
        perspective(800px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;
    });

const motto = document.querySelector(".moto");
const firstMotto = `Jack of all trades,
        Master of none,`;
const secondMotto = `Often better
    than master of one.`;

    let changed = false;
    function restartTyping(text) {
        motto.classList.remove("typing");
        void motto.offsetWidth;
        motto.style.setProperty("--characters", text.length);
        motto.textContent = text;
        motto.classList.add("typing");
    }
window.addEventListener("scroll", () =>{
    if(window.scrollY>= window.innerHeight && !changed){
        changed = true;
            restartTyping(secondMotto);
    }
    if(window.scrollY <window.innerHeight && changed){
        changed = false;
        restartTyping(firstMotto);
    }
});