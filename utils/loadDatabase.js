import fs from 'node:fs';

import readTree  from './readTree.js';
import readLeave from './readLeave.js';

export default ({ treeDirectory, leaveDirectory }) => {

    const loadedCache = {};

    const treeFiles = fs.readdirSync(treeDirectory, 'utf-8');

    for (const _treeFile of treeFiles) {

        const treeContent = readTree({

            treeDirectory,

            name: _treeFile
        });

        for (const _leaveFile of treeContent.leaves) {

            const leaveContent = readLeave({

                leaveDirectory,

                name: _leaveFile,
                type: treeContent.type
            });

            loadedCache[_treeFile] = leaveContent;
        };
    };

    return loadedCache;
};
