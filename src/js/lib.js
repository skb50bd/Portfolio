const executeAfter = (func, delayInSec) => {
    setTimeout(() => {
        func();
    }, delayInSec * 1000);
}
const fixParticlesCanvasHeight = () => {
    const skillParticles = document.querySelector("#skill-particles>canvas");
    skillParticles.style.height = skillParticles.parentElement.parentElement.clientHeight + "px";

    const introParticles = document.querySelector("#intro-particles>canvas");
    introParticles.style.height = introParticles.parentElement.parentElement.clientHeight + "px";
};

const loadParticleJs = () => {
    particlesJS.load(
        "skill-particles",
        'js/skill-particles.json');

    particlesJS.load(
        "intro-particles",
        'js/intro-particles.json',
        fixParticlesCanvasHeight);
};
