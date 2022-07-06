gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.from(".left-box", {
    height: 0,
    duration: 0.5,
});
tl.from(".right-box", {
    y: "100%",
    duration: 0.5,
    delay: "-1",
});
tl.from(".right-box>img", {
    y: "100%",
    duration: 0.5,
    opacity: 0,
});

tl.from(".hire", {
    opacity: 0,
    duration: 0.5,
    rotate: 35,

});
tl.call(removeBodyClass, []);
tl.from(".black-box", {
    width: "0%",
    duration: 0.5,
    delay: 0.5,
});
tl.from(".black-box>img", {
    y: "50%",
    opacity: 0,
    stagger: {
        each: 0.1,
    },
    duration: 0.5,
});

function removeBodyClass() {
    document.querySelector("#main").classList.remove("p-5");
}

//.lead
//.lead + p
gsap.from(".lead", {
        x: "-200%",
        duration: 0.3,
        scrollTrigger: {
            trigger: ".lead",
            // markers: true,
            start: "top 70%",
            //end: "top 70%",
        }
    })
    // const leadPara = document.querySelector(".lead + p")
gsap.from(".leadPara", {
    x: "200%",
    duration: 0.3,
    scrollTrigger: {
        trigger: ".leadPara",
        // markers: true,
        start: "top 70%",
        // end: "bottom 70%",
    }
})

gsap.from(".card", {
    opacity: 0,
    stagger: { each: 1 },
    scrollTrigger: {
        trigger: ".card",
        start: "top 70%"
    },
    duration: 1,
})
gsap.from(".panel", {
    opacity: 0,
    scale: 2,
    stagger: { each: 1 },
    scrollTrigger: {
        trigger: ".panel",
        start: "top 80%"
    },
    duration: 0.5,
})