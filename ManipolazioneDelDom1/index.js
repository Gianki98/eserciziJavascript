function addProduct() {
  try {
    const input = document.querySelector('input[type="text"]'); //metto in una const il DOM con tag input di tipo testo
    const ul = document.querySelector("ul"); //stessa cosa con il tag ul
    const text = input.value; // in una const l'input testuale inserito
    const li = document.createElement("li"); //creo una li in ul
    const checkbox = document.createElement("input"); // creo una checkbox
    checkbox.type = "checkbox";
    li.appendChild(checkbox); // metto checkbox dentro li
    li.appendChild(document.createTextNode(text)); // idem per il testo
    ul.appendChild(li); // metto li dentro ul
    input.value = ""; // pulisco
  } catch (error) {
    console.error(error); 
  }
}
