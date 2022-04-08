let itemOpenMulti = null;

let mapMulti = new Map();

let selectItensMulti = document.querySelectorAll('.list-form-select-multi');

function onClickCreateSpan( placeHolderSelect, option, div ){

    console.log( option.text, option.value, option.selected);
    
    let span = document.createElement('span');
        span.innerHTML = `
            ${option.text}
            <span class="icon">
                <i class="fa-solid fa-xmark"></i>
            </span>
    `;
    span.className = 'item-tag-list';

    console.log(span);

    let close = span.querySelector('span.icon');
        
    placeHolderSelect.appendChild(span);

    close.onclick = (event) => { 
        if (event.stopPropagation){
            event.stopPropagation();
        }
        else if(window.event){
           window.event.cancelBubble=true;
        }

        onClickClose( placeHolderSelect, span, div, option ) 
    };

}

function onClickClose( placeHolderSelect, span, div, option ){
    placeHolderSelect.removeChild(span);
    div.classList.remove('list-form-select-multi-item-selected'); 
    option.selected = !option.selected;
}

function createOptionSelct( option, placeHolderSelect, index ){

    let div = document.createElement('div');
    let hFor = document.createElement('h4');

    div.setAttribute('data-value',option.value);
    div.setAttribute('data-index', index );
    div.classList.add('list-form-select-multi-item');
    if ( option.selected  ) {
        div.classList.add('list-form-select-multi-item-selected');
        
        onClickCreateSpan( placeHolderSelect, option, div );

    }
    hFor.innerText = option.text;

    div.appendChild(hFor);

    return div;

}


for (let index = 0; index < selectItensMulti.length; index++) {
    
    const selectElement = selectItensMulti[index];

    const containerSelect = selectElement.querySelector('div.list-form-select-multi-container');

    const select = selectElement.querySelector('select');
    
    const headerSelect = selectElement.querySelector('.list-form-select-multi-header');

    let placeHolderSelect = headerSelect.querySelector('div.selected-item-form');

    for (let j = 0; j < select.options.length; j++) {
        const option = select.options[j];
        containerSelect.appendChild( createOptionSelct( option, placeHolderSelect, j  ) );
    }
    
    let selectItens = selectElement.querySelectorAll('.list-form-select-multi-item-selected');

    for (let indexMulti = 0; indexMulti < selectItens.length; indexMulti++) {
        const selectItem = selectItens[indexMulti];
        
        mapMulti.set(index, {
            selectItem: selectItem,
            select: select
        });
    }

    
    

    headerSelect.onclick = function(event) {

        headerSelect.classList.toggle('list-form-select-multi-header-active');
        

        if ( headerSelect.classList.contains('list-form-select-multi-header-active') ) {

            if ( itemOpenMulti != headerSelect ) {
                itemOpenMulti?.click();
                itemOpenMulti = headerSelect;
            }

            containerSelect.style.display = "block";
        }else{

            if ( itemOpenMulti == headerSelect ) {
                itemOpenMulti = null;
            }

            containerSelect.style.display = "none";
        }
    }

    const itensSelect = selectElement.querySelectorAll('.list-form-select-multi-item');

    for (let i = 0; i < itensSelect.length; i++) {
        const itemSelect = itensSelect[i];

        itemSelect.onclick = function() {

            if( !itemSelect.classList.contains( 'list-form-select-multi-item-selected' ) ){
                let index_item = itemSelect.getAttribute('data-index');
                select.options[index_item].selected = true;
                itemSelect.classList.add( 'list-form-select-multi-item-selected' );
                onClickCreateSpan( placeHolderSelect, select.options[index_item], itemSelect );
            }
            
        }
        
    }

}