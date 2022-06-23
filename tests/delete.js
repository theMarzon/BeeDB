import BeeDB from '../index.js';

const database = new BeeDB('test');

database.create('sexo', 'hola mundo');
database.create('anal', 'hola mundo');
database.create('agua', 'hola mundo');

console.log(database.workspace());

database.delete('sexo');

console.log(database.workspace());
