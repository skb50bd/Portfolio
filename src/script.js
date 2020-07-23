document.addEventListener(
    'DOMContentLoaded',
    () => {
        loadParticleJs("particles");

        executeAfter(
            () => console.log("This is my awesome portfolio"),
            2);
    });
