# PROJET CALCULETTE

Exercice d'entrainement à Java Script, créer une calculette simple utilisant:
* Java Script
* HTML
* CSS

## Disponible ici:
http://127.0.0.1:5500/Projets/calculette.html

### et ici dans le pc
C:\Users\sabo0\Projets
### ou
file:///C:/Users/sabo0/Projets/calculette.html

## Commandes pouvant être utilisées:
* select elements: 
id
``` js
let element = document.getElementById("monId");
```

* edit elements: 
edit text
``` js
docupment.getElementById("monId").textContent = "Nouveau texte !"
```

* change an element's style (css) 
``` js
document.getElementById("monId").style
```

* ajouter un écouteur d'évênement
``` js
document.getElementById("monBouton").addEventListener("click", function(){
    alert("Bonton cliqué !);
});
```

### notes
``` html
<form action="" method="get">
    Premier nombre <input type="number" name="a" id="a" />
    <br />
    deuxième nombre
    <br />
    <br />
    <br />
    <button type="button" id="add">Addition</button>
    <button type="button">Addition</button>
    <button type="button">Addition</button>

```

event listener: au moment ou cet eevenemet a lieu on appelle une fct (callback) = fct qui est passée en parametre d'une autre fct

``` js
document.getElementById("monBouton").addEventListener("click", function(){});
```
console.log('truc') => return truc

## Les fonction en JS
* Syntaxe de base pour déclarer une fonction en JS:
``` js
function nomDeLaFonction(param1) {
  // Code a executer
}

``` js
const nomDeLaFonction = function (param1) {
  // Code a executer
};
```
``` js
const nomDeLaFonction = (param1) => {
  // Code a executer
};
```
``` js
const nomDeLaFonction = (param1) => {
  return param1 * 2;
};
```
``` js
const nomDeLaFonction = (param1) => param1 * 2;
```
``` js
const nomDeLaFonction = () => console.log("Hello");
() => {};
```

* ### eviter rechargement de la page
``` js
event.preventDefault();
```

if (select.value === 'add'){


    } else if (select.value === 'sub'){

    } else if (select.value === 'mul'){

    } else if (select.value === 'div'){

    }