//  set player Name
 const playerList = [];

//  dispaly player Name
function displayPlayer(){
    const cardTable = document.getElementById('products-cart');
    cardTable.textContent='';
   
    for(let i = 0; i<playerList.length; i++){
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i+1}.</th>
            <td>${playerList[i].playerNameObjcet}</td>
            `;
            if(i < 5){

                cardTable.appendChild(tr);
            }
            else{
                alert('you are not selected more than 5 player');
                break;
            }
          
    }

}

// player name collection
function addToCart(element){
    const bestPlayerName = element.parentNode.parentNode.children[0].innerText;
    const player = bestPlayerName;
    
         const playerName = {
        playerNameObjcet: bestPlayerName
    }
    playerList.push(playerName);

    // if(playerList.length < 5){
    //     playerList.push(player);
    //     element.disabled = true;
    //     element.style.backgroundColor= 'grey';

    // }
    // else{
    //     alert("You Can't Add More Than 5 ")
    // }
    
    displayPlayer();

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

    // total ammout k  string theke number convert
    function getTextFieldById(textId){
        const textTotalElement= document.getElementById(textId);
        const textFieldString = textTotalElement.innerText;
        const textFeildNumber = parseFloat(textFieldString);
        return textFeildNumber;
    }
// sum korar por man k set kore
    function setPerPlayerAmout(elementId,value){
        const setPlayerExprnces = document.getElementById(elementId);
        setPlayerExprnces.innerText=value;
    }

    // button calculate
document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerBadget =  perPlayerBadgetInput('per-player-field');
    if(playerList.length < 6 && perPlayerBadget >= 0 ){

        const perPlayerAmount = perPlayerBadget * playerList.length;
        document.getElementById('player-expenses').innerText = perPlayerAmount;
    }
    else{
        alert('Please enter cost for each player!!')
    }

    // const playerExpeneces = getTextFieldById('player-expenses');
    // setPerPlayerAmout('player-expenses', perPlayerAmount);
})

// total button calculate
document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerInputField = perPlayerBadgetInput('manager-field');
    const coachInputField = perPlayerBadgetInput('coach-field');
    const perPlayerBadget =  perPlayerBadgetInput('per-player-field');

    if(isNaN(perPlayerBadget) || isNaN(managerInputField) || isNaN(coachInputField)){
        alert('please input number')
    }

    const perPlayerAmount = perPlayerBadget * playerList.length;
    const totalAmount = managerInputField + coachInputField + perPlayerAmount;
   

    const total = getTextFieldById('total-amount');
    setPerPlayerAmout('total-amount', totalAmount);

})