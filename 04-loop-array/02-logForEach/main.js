const names = ['Mike', 'Sid', 'Jack', 'Bill'];

function logPerson(person, order) {
    console.log(order + 1, person);
}

// Callback : Literal,On the fly
names.forEach((person, order) => console.log(order + 1, person));

// Callback : Named, Reference
names.forEach(logPerson);

// logPerson('pavit', 99);
// names.forEach(5);
