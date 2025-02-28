// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listFriendsItems = document.getElementById("listaAmigos");
let secretFriendItem = document.getElementById("resultado");
let listFriends = [];


function agregarAmigo() {
    let inputFriendName = document.getElementById("amigo");
    let friendName = inputFriendName.value;

    if (friendName.length == 0 || friendName.replace(/[^a-zA-Z ]/g, "").length != friendName.length) {
        inputFriendName.value = "";
        alert("Por favor, ingrese un nombre válido");
        return
    }

    let newFriendItem = document.createElement('li');
    newFriendItem.innerHTML = friendName;
    listFriends.push(friendName);
    listFriendsItems.appendChild(newFriendItem);
    inputFriendName.value = "";
}

function sortearAmigo() {
    let randIndex = Number.parseInt(Math.random() * listFriends.length);
    listFriendsItems.hidden = true;
    let secretFriend = listFriends.at(randIndex); 
    secretFriendItem.innerHTML = `El amigo secrete sorteado es: ${secretFriend}`;
}