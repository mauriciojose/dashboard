let itemOpen = null;

let map = new Map();

let selectItens = document.querySelectorAll('.list-form-select');

function createOptionSelct(option, selected = false, placeHolderSelect){

    let div = document.createElement('div');
    let hFor = document.createElement('h4');

    div.setAttribute('data-value',option.value);
    div.classList.add('list-form-select-item');
    if ( selected  ) {
        div.classList.add('list-form-select-item-selected');
        placeHolderSelect.innerText = option.text;
    }
    hFor.innerText = option.text;

    div.appendChild(hFor);

    return div;

}


for (let index = 0; index < selectItens.length; index++) {
    
    const selectElement = selectItens[index];

    const containerSelect = selectElement.querySelector('div.list-form-select-container');

    const select = selectElement.querySelector('select');
    
    const headerSelect = selectElement.querySelector('.list-form-select-header');

    let placeHolderSelect = headerSelect.querySelector('div.selected-item-form .item-tag-list');

    for (let j = 0; j < select.options.length; j++) {
        const option = select.options[j];
        containerSelect.appendChild( createOptionSelct( option, j === select.selectedIndex, placeHolderSelect  ) );
    }
    
    let selectItem = selectElement.querySelector('.list-form-select-item-selected');

    map.set(index, {
        selectItem: selectItem,
        select: select
    });
    
    

    headerSelect.onclick = function() {
        
        headerSelect.classList.toggle('list-form-select-header-active');
        

        if ( headerSelect.classList.contains('list-form-select-header-active') ) {

            if ( itemOpen != headerSelect ) {
                itemOpen?.click();
                itemOpen = headerSelect;
            }

            containerSelect.style.display = "block";
        }else{

            if ( itemOpen == headerSelect ) {
                itemOpen = null;
            }

            containerSelect.style.display = "none";
        }
    }

    const itensSelect = selectElement.querySelectorAll('.list-form-select-item');

    for (let i = 0; i < itensSelect.length; i++) {
        const itemSelect = itensSelect[i];

        itemSelect.onclick = function() {

            if ( map.get(index)?.selectItem != itemSelect ) {

                let selectAux= map.get(index)?.select;
                selectAux.value= itemSelect.getAttribute('data-value');
                placeHolderSelect.innerText = itemSelect.querySelector('h4').innerText;
                
                itemSelect.classList.add('list-form-select-item-selected');
                map.get(index)?.selectItem?.classList.remove('list-form-select-item-selected');
                
                map.set(index, {
                    selectItem: itemSelect,
                    select: map.get(index)?.select
                });
                
                
            }else{
                map.get(index)?.selectItem.classList.remove('list-form-select-item-selected');
                let selectAux= map.get(index)?.select;
                selectAux.value='';
                map.set(index, {
                    selectItem: null,
                    select: map.get(index)?.select
                });
                placeHolderSelect.innerText = "Selecione";
            }
        }
        
    }

}