import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, directories }) => {

    const filePath = path.join(directories.seeds, name);

    let fileContent = fs.readFileSync(filePath, 'binary');

    fileContent = fileContent.split('\n');

    return fileContent;
};
