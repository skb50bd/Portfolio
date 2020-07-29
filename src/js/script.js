const GOLDEN_ANGLE = 137.508;

const getHue = index =>
    Math.floor((index * GOLDEN_ANGLE) % 360.0);

const getColor = index =>
    `hsla(${getHue(index)}, 100%, 40%, 1)`;

const animateBar = (element, maxWidth, callback) => {
    let i = 0;
    let interval = 10;
    function move() {
        if (i == 0) {
            i = 1;
            let width = 1;
            let id = setInterval(frame, interval);
            function frame() {
                if (width >= maxWidth) {
                    clearInterval(id);
                    callback();
                } else {
                    width++;
                    element.style.width = width + "%";
                }
            }
        }
    }
    move();
};

const writeSkillLabels = () => {
    const skills = document.querySelectorAll("#skillset .skill");
    skills.forEach(skill => skill.querySelector(".skill-name").innerHTML = skill.dataset.skillName);
}

const resetSkillsProgress = () => {
    const progresses = document.querySelectorAll(".progress-base>div");
    progresses.forEach(progress => progress.style.width = 0 + "%");

    const progressValues = document.querySelectorAll(".skill-percent");
    progressValues.forEach(elem => elem.innerHTML = "");
};

let animatingSkills = false;
const populateSkills = () => {
    if (animatingSkills) return;
    animatingSkills = true;

    const skills = document.querySelectorAll("#skillset .skill");
    let delay = 0;

    skills.forEach(skill => {
        const percent = skill.dataset.skillPercent;

        delay += percent * 5;
        setTimeout(
            () => animateBar(
                skill.querySelector(".progress-base>div"), 
                percent, 
                () => skill.getElementsByClassName("skill-percent")[0].innerHTML = percent + "%"), 
            delay);
    });

    setTimeout(() => animatingSkills = false, delay);
};

document.addEventListener(
    'DOMContentLoaded',
    () => {
        writeSkillLabels();
        populateSkills();
        // loadParticleJs("particles");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
                    if (id === "skills") {
                        resetSkillsProgress();
                        populateSkills();
                    }
                } else {
                    document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
                }
            });
        });

        document.querySelectorAll('section[id]').forEach(section => {
            observer.observe(section);
        });
    });
