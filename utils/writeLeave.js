import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, content, leaveDirectory }) => {

    const filePath = path.join(leaveDirectory, name);

    fs.writeFileSync(filePath, content, 'binary');
};
