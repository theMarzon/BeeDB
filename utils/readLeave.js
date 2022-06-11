import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, type, leaveDirectory }) => {

    const leaveFilePath = path.join(leaveDirectory, name);

    const leaveFileContent = fs.readFileSync(leaveFilePath, 'binary');

    switch (type) {

        case ('STRING'):

            // eslint-disable-next-line no-new-wrappers
            return new String(leaveFileContent);

        case ('NUMBER'):

            // eslint-disable-next-line no-new-wrappers
            return new Number(leaveFileContent);

        case ('BOOLEAN'):

            // eslint-disable-next-line no-new-wrappers
            return new Boolean(leaveFileContent);

        case ('BIGINT'):

            // eslint-disable-next-line no-new-wrappers
            return new BigInt(leaveFileContent);
    };
};
