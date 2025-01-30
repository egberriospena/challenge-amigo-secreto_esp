/* 
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
*/


// Crea array para guardar los amigos
let friends = [];
let friend;

// Función para formatear la lista de amigos
function formatFriendsList(friends) {
    if (friends.length === 0) 
        return "";
    if (friends.length === 1) 
        return friends[0];
    
    let lastFriend = friends[friends.length - 1];
    let remainingFriends = friends.slice(0, -1).join(", ");
    
    return `${remainingFriends} y ${lastFriend}`;
}

// Implementar una función para agregar amigos
function addTextElement(element, textArray) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = formatFriendsList(textArray);
}

function cleanInput() {
    document.querySelector('#amigo').value = '';
}

function addFriend() {
    friend = document.getElementById('amigo').value;
    if (friend == '') {
        alert('Por favor, inserte un nombre');
    } else {
        friends.push(friend);
        console.log(friends);
        cleanInput();
        addTextElement('ul', friends);
        return friend;
    }
}

// Función para sortear un amigo de manera aleatoria
function drawFriend() {
    if (friends.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    let randomIndex = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[randomIndex];
    
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${selectedFriend}`;
}