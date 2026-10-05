const me = document.querySelector(".me");
const canHover = window.matchMedia("(hover: hover)").matches;

if (me&&canHover && !reduceMotion) {
    me.addEventListener("mousemove", (e) => {
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
}
const motto = document.querySelector(".moto");
const firstMotto = "Jack of all trades,\nMaster of none,";
const secondMotto = "Often better\nthan master of one.";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let typingTimer = null;
    function typeText(text) {
    clearInterval(typingTimer);

    if (reduceMotion) {
        motto.textContent = text;
        return;
    }

    motto.textContent = "";
    let i = 0;
    typingTimer = setInterval(() => {
        i++;
        motto.textContent = text.slice(0, i);
        if (i >= text.length) clearInterval(typingTimer);
    }, 60);
}

if (motto) {
    let showingSecond = false;

    typeText(firstMotto);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100 && !showingSecond) {
            showingSecond = true;
            typeText(secondMotto);
        } else if (window.scrollY < 30 && showingSecond) {
            showingSecond = false;
            typeText(firstMotto);
        }
    });
}
