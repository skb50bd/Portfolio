document.addEventListener(
    'DOMContentLoaded',
    () => {
        // loadParticleJs("particles");

        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();

        executeAfter(
            () => console.log("This is my awesome portfolio"),
            2);
    });
