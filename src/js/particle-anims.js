const adjustParticlesCanvasHeight = divId => {
    const canvas = document.querySelector(`#${divId}>canvas`);
    canvas.style.height = canvas.parentElement.parentElement.clientHeight + "px";
};

const adjustSkillParticlesCanvasHeight = () => 
    adjustParticlesCanvasHeight("skill-particles");

const adjustIntroParticlesCanvasHeight = () => 
    adjustParticlesCanvasHeight("intro-particles");

export const mountSkillParticles = () => 
    particlesJS.load(
        "skill-particles",
        'js/skill-particles.json', 
        adjustSkillParticlesCanvasHeight);

export const mountIntroParticles = () => 
    particlesJS.load(
        "intro-particles",
        'js/intro-particles.json',
        adjustIntroParticlesCanvasHeight);

const removeParticles = divId =>
    document.querySelector(`#${divId}`).innerHTML = "";

export const removeSkillParticles = () => 
    removeParticles("skill-particles");

export const removeIntroParticles = () => 
    removeParticles("intro-particles");