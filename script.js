let pronoun = ['el', 'nuestro', 'mi', 'su', 'tu'];
let adj = ['buen', 'gran', 'pequeño', 'hermoso'];
let noun = ['corredor', 'mapache', 'ciudadano', 'perro', 'gato']; 

let container = [];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {

            let container1 = pronoun[i] + adj[j] + noun[k] + '.com';
            
            container.push(container1);
            }
        }
    }

for (let i = 0; i < container.length; i++){
    console.log(container[i]);
}