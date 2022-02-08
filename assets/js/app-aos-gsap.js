window.addEventListener('load', function () {
    gsap.registerPlugin(ScrollTrigger);

    //REVEAL BLOCK
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

    //REVEAL BLOCK
    gsap.utils.toArray('.split').forEach(split => {
        const elems_split = split.querySelectorAll('.split-p');
        const elems_split_c = split.querySelectorAll('.split-c');

        // Set things up
        gsap.set(elems_split, {
            opacity: 1,
            yPercent: 0,
        });

        ScrollTrigger.create({
            trigger: elems_split,
            start: 'top 85%',
            toggleClass: {
                targets: split,
                className: "is-inview",
            },
            onEnter: () => gsap.fromTo(elems_split_c, {
                opacity:0,
                yPercent: 100,
            }, {
                yPercent: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.1,
            }),

        });
    })
    

});