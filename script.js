function loading(){
    let timeLine = gsap.timeline();

    timeLine.to("#yellow1", {
        top: "-100%",
        delay: 0.1,
        duration: 0.5,
        ease: "expo.out"
    });
    timeLine.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "anim");

    timeLine.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.5,
    }, "anim");

    timeLine.to("#loader", {
        display: "none"
    })
};

loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

let page2 = document.querySelector("#page2");
let elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        let bgImg = elem.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgImg})`;
    })
})