document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(
        ScrollTrigger,
        ScrollToPlugin
    );


    /* =========================================
       HEADER
    ========================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* =========================================
       HERO
    ========================================= */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    heroTimeline
        .from(".header", {
            y: -40,
            opacity: 0,
            duration: 0.8
        })
        .from(".hero-tag", {
            y: 30,
            opacity: 0,
            duration: 0.6
        }, "-=0.3")
        .from(".hero h1", {
            y: 80,
            opacity: 0,
            duration: 1
        }, "-=0.3")
        .from(".hero p", {
            y: 30,
            opacity: 0,
            duration: 0.7
        }, "-=0.5")
        .from(".hero-buttons", {
            y: 25,
            opacity: 0,
            duration: 0.6
        }, "-=0.4")
        .from(".hero-decoration span", {
            scale: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 1
        }, "-=0.8");


    /* =========================================
       HERO PARALLAX
    ========================================= */

    gsap.to(".hero-content", {
        y: -100,
        opacity: 0.25,

        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });


    gsap.to(".hero-decoration", {
        y: 180,
        rotation: 25,

        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });


    /* =========================================
       SEÇÕES
    ========================================= */

    gsap.utils.toArray(".section-header").forEach((sectionHeader) => {

        gsap.from(sectionHeader.children, {

            y: 50,
            opacity: 0,

            duration: 0.8,

            stagger: 0.12,

            ease: "power3.out",

            scrollTrigger: {
                trigger: sectionHeader,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }

        });

    });


    /* =========================================
       SOBRE
    ========================================= */

    gsap.from(".about-image", {

        x: -80,
        opacity: 0,
        rotation: -4,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".about-content",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }

    });


    gsap.from(".about-text", {

        x: 80,
        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".about-content",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }

    });


    /* =========================================
       SKILLS
    ========================================= */

    gsap.from(".skills span", {

        y: 20,
        opacity: 0,

        duration: 0.5,

        stagger: 0.08,

        ease: "power2.out",

        scrollTrigger: {
            trigger: ".skills",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }

    });


    /* =========================================
       PROJETOS
    ========================================= */

    gsap.from(".project-card", {

        y: 80,
        opacity: 0,
        scale: 0.96,

        duration: 0.8,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }

    });


    /* =========================================
       HOVER DOS PROJETOS
    ========================================= */

    document.querySelectorAll(".project-card").forEach((card) => {

        const arrow = card.querySelector(".project-top a");

        const hoverTimeline = gsap.timeline({
            paused: true
        });

        hoverTimeline
            .to(card, {
                y: -8,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(arrow, {
                rotation: 45,
                scale: 1.1,
                duration: 0.25,
                ease: "power2.out"
            }, 0);

        card.addEventListener("mouseenter", () => {
            hoverTimeline.play();
        });

        card.addEventListener("mouseleave", () => {
            hoverTimeline.reverse();
        });

    });


    /* =========================================
       CONTATO
    ========================================= */

    gsap.from(".contact-link", {

        x: -50,
        opacity: 0,

        duration: 0.7,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".contact-links",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }

    });


    /* =========================================
       FOOTER
    ========================================= */

    gsap.from(".footer-content > div", {

        y: 30,
        opacity: 0,

        duration: 0.7,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
            trigger: ".footer",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }

    });


    /* =========================================
       NAVEGAÇÃO SUAVE
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            gsap.to(window, {

                duration: 1,

                scrollTo: {
                    y: target,
                    offsetY: 20
                },

                ease: "power3.inOut"

            });

        });

    });


    /* =========================================
       REDUZIR ANIMAÇÕES SE O USUÁRIO PEDIR
       REDUÇÃO DE MOVIMENTO
    ========================================= */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (prefersReducedMotion) {

        gsap.globalTimeline.clear();

        ScrollTrigger.getAll().forEach((trigger) => {
            trigger.kill();
        });

    }


    /* =========================================
       REFRESH
    ========================================= */

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

});
