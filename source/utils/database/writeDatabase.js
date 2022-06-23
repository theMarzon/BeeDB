import crypto from 'node:crypto';

import writeTree from '../compressor/writeTree.js';
import writeSeed from '../compressor/writeSeed.js';

export default ({ object, directories }) => {

    for (const _key in object) {

        const treeContent = object[_key].toString();

        let treeType = typeof object[_key];

        treeType = treeType.toUpperCase();

        let treeName = crypto
                            .createHash('md5')
                            .update(treeContent)
                            .digest('hex');

        treeName = treeName.toUpperCase();

        // Crea el arbol
        writeTree({

            directories,

            name:    treeName,
            content: treeContent
        });

        // Crea la semilla
        writeSeed({

            directories,

            name: _key,
            type: treeType,
            tree: treeName
        });
    };
};
