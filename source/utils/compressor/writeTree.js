import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, content, directories }) => {

    const filePath = path.join(directories.trees, name);

    fs.writeFileSync(filePath, content, 'binary');
};
