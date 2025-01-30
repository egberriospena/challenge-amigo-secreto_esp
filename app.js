/* 
El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
*/

/*
    Crea array para guardar los amigos
*/

let friends = [];
let friend;


/*
    formatFriendsList(friends)
    
    Esta función toma un array de amigos y devuelve un string con la lista formateada correctamente, asegurando que el último nombre se una con "y" en lugar de una coma. Es para térnminos de visualización del array en el index.html
*/

function formatFriendsList(friends) {
    if (friends.length === 0) 
        return "";
    if (friends.length === 1) 
        return friends[0];
    
    let lastFriend = friends[friends.length - 1];
    let remainingFriends = friends.slice(0, -1).join(", ");
    
    return `${remainingFriends} y ${lastFriend}`;
}

/*
    addTextElement(element, textArray)

    Permite formatear la información el el html considerando el id del tag en html y el valor guardado en el array con los nombres ingresados

*/

function addTextElement(element, textArray) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = formatFriendsList(textArray);
}


function cleanInput() {
    document.querySelector('#amigo').value = '';
}

/*
    addFriend()

    Esta función agrega un amigo a la lista y actualiza la visualización.
    Se declara la variable friend con el ingreso del nombre en el input.
    Después, se genera una condición en caso de que no tenga un nombre ingresado en el input.
    Si tiene ingresado un nombre en el input y selecciona el botón se inserta la información en el array, mostrando el listado en pantalla, utilizando la función addTextElement declarada.
*/
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

/*
    drawFriend()

    Esta función selecciona un amigo aleatoriamente de la lista de amigos (friends) y lo muestra en el HTML.
    Si el array friends está vacío (friends.length === 0), se muestra un alert() con el mensaje "No hay amigos en la lista para sortear."
    Luego, la función se detiene con return para evitar errores al intentar seleccionar un nombre.
    En el siguiente paso, se define el número aleatorio considerando el índice completo del array y con ese número se realiza la selección del nombre considerando dicha posición.
    Fionalmente selecciona el id del tag en el html para indicar el nombre del amigo escogido por medio de un template strings.
*/
function drawFriend() {
    if (friends.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }
    
    let randomIndex = Math.floor(Math.random() * friends.length);
    let selectedFriend = friends[randomIndex];
    
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${selectedFriend}`;
}