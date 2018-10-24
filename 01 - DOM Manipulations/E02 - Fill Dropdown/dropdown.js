function addItem() {
    //get input
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    //append 
    let option = document.createElement("option");
    option.textContent = itemText;
    option.value = itemValue;

    let menu = document.getElementById('menu');
    menu.appendChild(option);

    //clear the input field

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}
