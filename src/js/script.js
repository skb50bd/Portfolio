function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

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

        const skills = {
            html: 95,
            css: 90,
            javascript: 70,
            php: 55,
            angular: 65
        };

        let multiply = 4;

        Object.keys(skills).forEach(key => {
            const delay = 500;

            setTimeout(() => {
                document.getElementById(key + '-percent').innerHTML = skills[key] + "%";
            }, delay * multiply);

            multiply++;
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
                } else {
                    document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
                }
            });
        });
    
        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });
 
        executeAfter(
            () => console.log("This is my awesome portfolio"),
            2);
    });
