'use strict'

let display = document.querySelectorAll("span");
// console.log(display);
let history = document.querySelector('.historyList');
let inputForm = document.forms.transaction;
let priceType;
let transValType;

inputForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    let textValue = inputForm.textInput.value;
    let priceValue = inputForm.priceInput.value;
    priceType = priceValue >0 ? 'positive':'negetive';
    // console.log(priceType);

    if (textValue!='' && priceValue!=0) {

    let historyElementDiv = document.createElement('div');
        historyElementDiv.className = 'historyElementDiv';
    let delBtn = document.createElement('h3');
        delBtn.className = 'delBtn';
        delBtn.innerText = 'x';
    let historyElement = document.createElement('div');
        historyElement.className = 'historyElement';
    let historyDescript = document.createElement('p');
        historyDescript.innerText = textValue;
    let historyPrice = document.createElement('p');

    historyElement.append(historyDescript,historyPrice);
    historyElementDiv.append(delBtn,historyElement);
    history.append(historyElementDiv);

    if (priceType == 'positive') {
        historyPrice.innerText = '+'+priceValue;
        
        display[0].innerHTML = Number(display[0].innerHTML) + Number(priceValue);
        display[1].innerHTML = Number(display[1].innerHTML) + Number(priceValue);
    }
    else {
        // console.log(priceType);
        historyPrice.innerText = priceValue;
        historyElement.classList.add('border');

        display[0].innerHTML = Number(display[0].innerHTML) + Number(priceValue);
        display[2].innerHTML = Number(display[2].innerHTML) + Number(priceValue);
    }
    inputForm.reset();

    historyElementDiv.addEventListener('mouseover', (event)=> {
        delBtn.classList.add('delRed');
    });
    historyElementDiv.addEventListener('mouseout', (event)=> {
        delBtn.classList.remove('delRed');
    });
    delBtn.addEventListener('click', ()=> {
        let transVal = Number(delBtn.nextElementSibling.lastElementChild.innerText);
        transValType = transVal >0 ? 'positive':'negetive';
        
        if (transValType == 'positive') {
            display[0].innerHTML = Number(display[0].innerHTML) - Number(transVal);
            display[1].innerHTML = Number(display[1].innerHTML) - Number(transVal);
        }
        else {
            console.log(Number(transVal));
            display[0].innerHTML = Number(display[0].innerHTML) - Number(transVal);
            display[2].innerHTML = Number(display[2].innerHTML) - Number(transVal);
        }
        delBtn.parentElement.remove();
    });
    }
    else {
        alert('Please enter the value');
    };
});

