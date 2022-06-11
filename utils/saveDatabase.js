import crypto from 'node:crypto';

import writeLeave from './writeLeave.js';
import writeTree  from './writeTree.js';

export default ({ cache, treeDirectory, leaveDirectory }) => {

    for (const _key in cache) {

        const keyContent = cache[_key].toString();

        const keyHash = crypto.createHash('sha256', _key)
                              .update(keyContent)
                              .digest('hex');

        // Crea la hoja
        writeLeave({

            leaveDirectory,

            name:      keyHash,
            content:   keyContent
        });

        let treeType = typeof cache[_key];

        treeType = treeType.toUpperCase();

        // Crea el archivo del arbol
        writeTree({

            treeDirectory,

            name:  _key,
            type:  treeType,
            leave: keyHash
        });
    };
};
