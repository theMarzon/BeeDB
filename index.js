import fs   from 'node:fs';
import path from 'node:path';

import writeDatabase from './source/utils/database/writeDatabase.js';
import readDatabase  from './source/utils/database/readDatabase.js';

const cache = {};

export default class {

    constructor (database, { directory, save }) {

        // Directorio para las semillas
        const seedsDirectory = (directory) ? path.join(directory, database, 'seeds')
                                           : path.join(process.cwd(), 'databases', database, 'seeds');

        if (!fs.existsSync(seedsDirectory)) fs.mkdirSync(seedsDirectory, { recursive: true });

        // Directorio para los arboles
        const treesDirectory = (directory) ? path.join(directory, database, 'trees')
                                           : path.join(process.cwd(), 'databases', database, 'trees');

        if (!fs.existsSync(treesDirectory)) fs.mkdirSync(treesDirectory, { recursive: true });

        // Cache de la base de datos
        if (!cache[database]) cache[database] = {};

        // Autoguardado de la base de datos
        this.save = save;

        // Nombre de la base de datos
        this.database = database;

        // Directorios de la base de datos
        this.directories = {

            seeds: seedsDirectory,
            trees: treesDirectory
        };
    };

    write () {

        writeDatabase({

            object: cache[this.database],

            directories: this.directories
        });
    };

    read () {

        cache[this.database] = readDatabase({

            directories: this.directories
        });
    };

    workspaces () {

        return cache;
    };

    workspace () {

        return cache[this.database];
    };

    create (key, value) {

        cache[this.database][key] = value;
    };

    delete (key) {

        delete cache[this.database][key];
    };

    fetch (key) {

        return cache[this.database][key];
    };

    exist (key) {

        return !!cache[this.database][key];
    };

    clean () {

        cache[this.database] = {};
    };
};
