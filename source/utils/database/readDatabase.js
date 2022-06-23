import fs from 'node:fs';

import readTree  from '../compressor/readTree.js';
import readSeed  from '../compressor/readSeed.js';
import parseTree from '../compressor/parseTree.js';
import parseSeed from '../compressor/parseSeed.js';

export default ({ directories }) => {

    const loadedCache = {};

    const seedFiles = fs.readdirSync(directories.seeds, 'utf-8');

    for (const _seedFile of seedFiles) {

        // Lee el contenido de la semilla
        let seedContent = readSeed({

            directories,

            name: _seedFile
        });

        seedContent = parseSeed({ content: seedContent });

        switch (seedContent.type) {

            // case ('STRING'):
            // case ('NUMBER'):
            // case ('BIGINT'):
            // case ('BOOLEAN'):

            default:

                let treeContent = readTree({

                    directories,

                    name: seedContent.tree
                });

                treeContent = parseTree({

                    content: treeContent,
                    type:    seedContent.type
                });

                loadedCache[_seedFile] = treeContent;

                break;
        };
    };

    return loadedCache;
};
