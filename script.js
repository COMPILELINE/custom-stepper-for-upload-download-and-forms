function StepProgress(stepLabels){
    const percPort = 100 / (stepLabels.length - 1);
    const el = document.createElement('div');
    el.className = 'progress_header';
    el.innerHTML = stepLabels
        .map((label , i) => `<p><span class="step">${i + 1}</span><strong>${label}</strong></p>`)
        .join(' ')

        this.element = el;

        this.updateProgress = (perc) => {
            if(!isNaN(perc)){
                const stepIndex = Math.floor(perc / percPort)
                el.style.backgroundSize = `${perc}% 4px , 100% 4px`;
                [...el.children].forEach((stepEl , i) => {
                    if(i <= stepIndex){
                        stepEl.classList.add('completed')
                    } else {
                        stepEl.classList.remove('completed')
                    }
                })
            }
        }
}

const stepProgress = new StepProgress([
    'Personal Info',
    'Create Account',
    'Confirm Email',
    'Upload Avatar',
    'Log In'
])

document.body.appendChild(stepProgress.element)
setTimeout(() => {
    stepProgress.updateProgress(25)
}, 1500);

setTimeout(() => {
    stepProgress.updateProgress(50)
}, 4500);

setTimeout(() => {
    stepProgress.updateProgress(60)
}, 4500);

setTimeout(() => {
    stepProgress.updateProgress(75)
}, 7500);

setTimeout(() => {
    stepProgress.updateProgress(100)
}, 10000);