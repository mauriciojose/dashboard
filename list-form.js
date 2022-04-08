

const listForm = document.querySelectorAll("div.list-form-item-radio");
let listFormCheck = document.querySelector("div.list-form-item-check");

for (let index = 0; index < listForm.length; index++) {
    const element = listForm[index];
    const input = element.querySelector('input');
    input.onclick = function() {
        if ( element != listFormCheck ) {
            if ( this.checked ) {
                element.classList.add('list-form-item-check');
            } 
            listFormCheck?.classList.remove('list-form-item-check');

            listFormCheck = element;
        }else{

        }
    }
}

const listFormCheckBox = document.querySelectorAll("div.list-form-item-checkbox");

for (let index = 0; index < listFormCheckBox.length; index++) {
    const element = listFormCheckBox[index];
    const input = element.querySelector('input');
    input.onclick = function() {
        if ( this.checked ) {
            element.classList.add('list-form-item-check');
        }else{
            element.classList.remove('list-form-item-check');
        }
    }
}