import BeeDB from '../index.js';

const database = new BeeDB('test');

database.create('sexo', 'adios mundo');
database.create('anal', 'adios mundo');
database.create('agua', 'adios mundo');

console.log(database.workspace());

database.read();

console.log(database.workspace());
