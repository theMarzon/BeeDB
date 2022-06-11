import BeeDB from '../index.js';

const database = new BeeDB({ database: 'test' });

await database.read();
