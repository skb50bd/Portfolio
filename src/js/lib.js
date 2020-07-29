const executeAfter = (func, delayInSec) => {
    setTimeout(() => {
        func();
    }, delayInSec * 1000);
}
const fixParticlesCanvasHeight = () => {
    const skillParticles = document.querySelector("#skill-particles>canvas");
    skillParticles.style.height = skillParticles.parentElement.parentElement.clientHeight + "px";
};

const loadParticleJs = divId =>
    particlesJS.load(
        divId,
        'js/skill-particles.json',
        fixParticlesCanvasHeight);
