import fs   from 'node:fs';
import path from 'node:path';

export default (directory) => {

    const directories = directory.split(path.sep);

    for (let i = 0; i < directories.length; i++) {

        const currentDirectory = path.join(...directories.slice(0, i), directories[i]);

        if (!fs.existsSync(currentDirectory)) fs.mkdirSync(currentDirectory);
    };
};
