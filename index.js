import path from 'node:path';

import createDirectory from './utils/createDirectory.js';
import saveDatabase    from './utils/saveDatabase.js';
import loadDatabase    from './utils/loadDatabase.js';

export default class {

    constructor ({ database, directory }) {

        // Nombre de la base de datos
        this.database = database;

        // Directorio para los arboles
        const treeFoldersPath = (directory) ? path.join(directory, database, 'trees')
                                            : path.join(process.cwd(), 'databases', database, 'trees');

        createDirectory(treeFoldersPath);

        // Directorio para las hojas
        const leaveFoldersPath = (directory) ? path.join(directory, database, 'leaves')
                                             : path.join(process.cwd(), 'databases', database, 'leaves');

        createDirectory(leaveFoldersPath);

        this.directories = {

            trees:  treeFoldersPath,
            leaves: leaveFoldersPath
        };
    };

    write () {

        return new Promise((resolve, reject) => {

            try {

                saveDatabase({

                    treeDirectory:  this.directories.trees,
                    leaveDirectory: this.directories.leaves,

                    cache: { hola: 'mundo', sexo: true, culos: true }
                });
            } catch (error) {

                reject(error);
            } finally {

                resolve();
            };
        });
    };

    read () {

        return new Promise((resolve, reject) => {

            try {

                loadDatabase({

                    treeDirectory:  this.directories.trees,
                    leaveDirectory: this.directories.leaves
                });
            } catch (error) {

                reject(error);
            } finally {

                resolve();
            };
        });
    };
};
