export default ({ content, type }) => {

    switch (type) {

        case ('STRING'):

            // eslint-disable-next-line no-new-wrappers
            return new String(content);

        case ('NUMBER'):

            // eslint-disable-next-line no-new-wrappers
            return new Number(content);

        case ('BOOLEAN'):

            // eslint-disable-next-line no-new-wrappers
            return new Boolean(content);

        case ('BIGINT'):

            // eslint-disable-next-line no-new-wrappers
            return new BigInt(content);
    };
};
