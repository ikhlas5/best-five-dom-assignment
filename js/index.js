//  set player Name
 const cart = [];

function displayProduct(){
    const cardTable = document.getElementById('products-cart');
    cardTable.textContent='';

    if(5 < cart.length){
        alert('you are select five player only')
        return
    }
   

    for(let i = 0; i<cart.length; i++){
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${cart[i].playerNameObjcet}</td>
            `;
            cardTable.appendChild(tr);
          
    }

}


function addToCart(element){
    const bestPlayerName = element.parentNode.parentNode.children[0].innerText;

    const playerName = {
        playerNameObjcet: bestPlayerName
    }
    cart.push(playerName);
    displayProduct();
}
// player budget calculation
    function perPlayerBadgetInput(inputId){
        const playerBadgetInputField = document.getElementById(inputId);
        const playerInputString = playerBadgetInputField.value ;
        const playerInputNumber = parseFloat(playerInputString);
        if(inputId != 'per-player-field'){

            playerBadgetInputField.value='';
        }
        return playerInputNumber;
    }

    function getTextFieldById(textId){
        const textTotalElement= document.getElementById(textId);
        const textFieldString = textTotalElement.innerText;
        const textFeildNumber = parseFloat(textFieldString);
        return textFeildNumber;
    }

    function setPerPlayerAmout(elementId,value){
        const setPlayerExprnces = document.getElementById(elementId);
        setPlayerExprnces.innerText=value;
    }

document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBadget =  perPlayerBadgetInput('per-player-field');
    const perPlayerAmount = perPlayerBadget * cart.length;
          
    const playerExpeneces = getTextFieldById('player-expenses');
    setPerPlayerAmout('player-expenses', perPlayerAmount);
})

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerInputField = perPlayerBadgetInput('manager-field');
    const coachInputField = perPlayerBadgetInput('coach-field');
    const perPlayerBadget =  perPlayerBadgetInput('per-player-field');

    if(isNaN(perPlayerBadget) || isNaN(managerInputField) || isNaN(coachInputField)){
        alert('please input number')
    }

    const perPlayerAmount = perPlayerBadget * cart.length;
    const totalAmount = managerInputField + coachInputField + perPlayerAmount;
   

    const total = getTextFieldById('total-amount');
    setPerPlayerAmout('total-amount', totalAmount);

})