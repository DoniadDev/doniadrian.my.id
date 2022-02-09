//Animate after loader
const load = gsap.timeline({
    paused: "true"
})

load.to("#percent , #bar", {
    duration: .2,
    opacity: 0,
    zIndex: -1
})

load.to(".progress", {
    duration: .8,
    width: "0%"
})

load.fromTo('.loader', {
    opacity: 1,
    visibility: "visible"
}, {
    visibility: "hidden",
    opacity: 0,
})

// Set things up
load.set('.o-hidden', {
    y: 0,
    yPercent: 0,
});

load.fromTo('.o-hidden > span', {
    opacity: 0,
    y: 100,
}, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.1,
})

var id, width = 1;

function loading() {
    id = setInterval(frame, 25);
}

function frame() {
    if (width >= 100) {
        clearInterval(id)
        load.play();
    } else {
        width++;
        document.getElementById("barconfirm").style.width = width + '%';
        document.getElementById("percent").innerHTML = width + '%';
    }
}

window.onload = function () {
    loading();
}
// End Animate after loader


const hamburgers = document.querySelector(".hamburger");
hamburgers.addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
        gsap.to(".site-menu", {
            duration: 0.1,
            display: "block",
            ease: "expo.in"
        });
        gsap.to(".navBefore", {
            duration: 0.5,
            marginLeft: "0",
            ease: "expo.in"
        });
        gsap.to(".menu-navigation", {
            duration: 0.8,
            marginLeft: "0",
            delay: 0.3,
            ease: "expo.in"
        });
        gsap.to(".main-nav", {
            duration: 1,
            opacity: "1",
            delay: 0.8,
            ease: "expo.in"
        });
        console.log('yes')
    } else {
        console.log('non')
        gsap.to(".main-nav", {
            duration: 0.2,
            opacity: "0",
            ease: "expo.in"
        });
        gsap.to(".menu-navigation", {
            duration: 1,
            marginLeft: "100%",
            delay: 0.3,
            ease: "expo.in"
        });
        gsap.to(".navBefore", {
            duration: 1,
            marginLeft: "100%",
            delay: 0.5,
            ease: "expo.in"
        });
        gsap.to(".site-menu", {
            duration: 1,
            display: "none",
            delay: 1,
            ease: "expo.in"
        });
    }
});