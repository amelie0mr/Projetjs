

// recup le bouton
const addButton = document.getElementById("add");

addButton.addEventListener("click", function(){
    alert("click");
});

console.log(addButton);

// correction

//recup des val html

//crea des var
//formulaire
const form = document.getElementById("form");

//inputs

const input1 = document.getElementById( "input1");
const input2 = document.getElementById("input2");
const select = document.getElementById("select");

//result

const result = document.getElementById("result");

//creation des events
//le param event est passe de facon implicite
//maisn il est preferable de le laisser tel quel pr une meilleur compréhension

form.onsubmit = (event) => {
    event.preventDefault();

    // recup de la val du select add,sub,mul
    console.log( "Valeur de l'element select: ",select.value);

    // recup de la val des inputs
    console.log("Valeur de l'element input1: ",input1.value);
    console.log("Valeur de l'element input2: ",input2.value);

    //utiliser la valeur du select pour effectuer l'opp correspondante

    

    switch (select.value) {
        case 'add':
            console.log("calcul choisi addition");
            result.innerText = Number(input1)
            break;
        
        case 'mul':
            console.log("calcul choisi multipli");
            
            break;
        case 'div':
            console.log("calcul choisi div");
            break;

        case 'sub':
            console.log("calcul choisi sous");
            break;
        default:
            break;
    }

    //afficher le result


}




