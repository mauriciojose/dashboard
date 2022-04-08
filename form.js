

const inputsAnimate = document.querySelectorAll("input.effect-input");

for (let index = 0; index < inputsAnimate.length; index++) {
    const element = inputsAnimate[index];
    element.onblur = function() {
        if ( this.value != "" ) {
            this.classList.add('has-content');
        } else {
            this.classList.remove('has-content');
        }
    }
}