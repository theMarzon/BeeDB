import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, type, tree, directories }) => {

    let fileContent = [ type, tree ];

    fileContent = fileContent.join('\n');

    const filePath = path.join(directories.seeds, name);

    fs.writeFileSync(filePath, fileContent, 'binary');
};
