const animateBar = (element, to) => {
    let i = 0;
    let interval = 10;
    function move() {
        if (i == 0) {
            i = 1;
            let width = 1;
            let id = setInterval(frame, interval);
            function frame() {
                if (width >= to) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    element.style.width = width + "%";
                }
            }
        }
    }
    move();
};

const resetSkillsProgress = () => {
    const progresses = document.querySelectorAll(".progress-base>div");
    progresses.forEach(progress => progress.style.width = 0 + "%");
};

let animatingSkills = false;
const populateSkills = () => {
    if (animatingSkills) return;
    animatingSkills = true;

    const skills = document.querySelectorAll("#skillset .skill");

    skills.forEach((skill, index) => {
        const name = skill.dataset.skillName;
        const percent = skill.dataset.skillPercent;

        skill.getElementsByClassName("skill-name")[0].innerHTML = name;

        setTimeout(
            () => animateBar(skill.querySelector(".progress-base>div"), percent), 
            index * percent * 5);

        setTimeout(
            () => skill.getElementsByClassName("skill-percent")[0].innerHTML = percent + "%", 
            (index + 1) * percent * 5);
    });

    setTimeout(() => animatingSkills = false, skills.length * 500);
};

document.addEventListener(
    'DOMContentLoaded',
    () => {
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
