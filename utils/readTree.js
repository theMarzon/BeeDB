import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, treeDirectory }) => {

    const filePath = path.join(treeDirectory, name);

    let fileContent = fs.readFileSync(filePath, 'binary');

    fileContent = fileContent.split('\n');

    return {

        name,

        type:   fileContent.at(0),
        leaves: fileContent.slice(1)
    };
};
