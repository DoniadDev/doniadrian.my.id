const tl = gsap.timeline();
const welcomeScreen = gsap.timeline({
    paused: "true",
});
tl.from(".title", {
    duration: 0.5,
    opacity: 0,
    y: 10,
});
tl.from(".bracket", {
    duration: 0.3,
    scale: 0,
    margin: 0,
});
tl.from("#loader", {
    duration: 0.2,
    scale: 0,
});

// initializing loader
let id,
    i = 0;

function loader() {
    id = setInterval(frame, 45);
}

function frame() {
    if (i >= 100) {
        clearInterval(id);
        welcomeScreen.play();
    } else {
        i++;
        document.getElementById("loader").innerHTML = i + "%";
    }
}
window.onload = function () {
    loader();
};

// welcome screen
welcomeScreen.to(".loading-section", {
    y: -10,
    opacity: 0,
});
welcomeScreen.to(".loading-screen", {
    duration: 0.8,
    y: -2000,
    ease: "Power4.out",
});
welcomeScreen.from(
    ".o-hidden > span", {
        y: 200,
        duration: 0.5,
        stagger: {
            amount: 0.2,
        },
    },
    "-=.8"
);


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


//SPLIT REVEAL
gsap.utils.toArray('.split').forEach(splits => {
    const elems_split = splits.querySelectorAll('.split-c');
    // Set starting params for sections
    gsap.set(elems_split, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        overwrite: 'auto',
    });

    ScrollTrigger.create({
        trigger: splits,
        start: 'top 85%',
        end: 'bottom 15%',
        onEnter: () => gsap.to(elems_split, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }),
        onLeave: () => gsap.to(elems_split, {
            y: -50,
            opacity: 0,
            stagger: 0.2,
        }),
        onEnterBack: () => gsap.to(elems_split, {
            y: 0,
            opacity: 1,
            stagger: -0.2,
        }),
        onLeaveBack: () => gsap.to(elems_split, {
            y: 50,
            opacity: 0,
            stagger: -0.2,
        }),
    });
})


//REVELLER REVEAL
gsap.utils.toArray('.listing-projects-item').forEach(split_reveller => {
    const elems_reveller = split_reveller.querySelectorAll('.reveller');

    // Set things up
    gsap.set(elems_reveller, {
        xPercent: -100,
    });

    ScrollTrigger.create({
        trigger: elems_reveller,
        start: 'top 85%',
        end: 'bottom 85%',
        onEnter: () => gsap.fromTo(elems_reveller, {
            xPercent: -100,
        }, {
            xPercent: 100,
            duration: 1.5,
            stagger: 0.2,
            delay: 0.1,
        }),

    });
})



// Skew