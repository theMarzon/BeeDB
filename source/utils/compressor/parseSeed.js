export default ({ content }) => {

    switch (content.at(0)) {

        // case ('STRING'):
        // case ('NUMBER'):
        // case ('BIGINT'):
        // case ('BOOLEAN'):

        default:

            return {

                type: content.at(0),
                tree: content.at(1)
            };
    };
};
