function afficherMessage() {
    const message = document.getElementById("MSG").value;
    const messageContainer = document.getElementById("messageContainer");
    
    if (message.trim() !== "") {
        messageContainer.textContent = "Cucina team apprécie votre avis!";
    } else {
        messageContainer.textContent = "Veuillez saisir un message avant de cliquer sur Send.";
    }
  }