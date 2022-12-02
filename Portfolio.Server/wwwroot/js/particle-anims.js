import { introParticlesConfig } from "./intro-particles.js"; 
import { skillParticlesConfig } from "./skill-particles.js"; 

const adjustParticlesCanvasHeight = divId => {
    const canvas = document.querySelector(`#${divId}>canvas`);
    canvas.style.height = canvas.parentElement.parentElement.clientHeight + "px";
};

const adjustSkillParticlesCanvasHeight = () => 
    adjustParticlesCanvasHeight("skill-particles");

const adjustIntroParticlesCanvasHeight = () => 
    adjustParticlesCanvasHeight("intro-particles");

export const adjustCanvasHeights = () => {
    adjustSkillParticlesCanvasHeight();
    adjustIntroParticlesCanvasHeight();
}

export const mountSkillParticles = () => 
    particlesJS(
        "skill-particles",
        skillParticlesConfig, 
        adjustSkillParticlesCanvasHeight);

export const mountIntroParticles = () => 
    particlesJS(
        "intro-particles",
        introParticlesConfig,
        adjustIntroParticlesCanvasHeight);

const removeParticles = divId =>
    document.querySelector(`#${divId}`).innerHTML = "";

export const removeSkillParticles = () => 
    removeParticles("skill-particles");

export const removeIntroParticles = () => 
    removeParticles("intro-particles");