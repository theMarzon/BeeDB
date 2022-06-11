import fs   from 'node:fs';
import path from 'node:path';

export default ({ name, type, leave, treeDirectory }) => {

    const filePath = path.join(treeDirectory, name);

    // Si el arbol existe
    if (fs.existsSync(filePath)) {

        // Carga el contenido del arbol existente
        let fileContent = fs.readFileSync(filePath, 'binary');

        fileContent = fileContent.split('\n');

        // Si el arbol no tiene registrada la hoja
        if (!fileContent.includes(leave)) {

            fileContent.push(leave);
        };

        fileContent = fileContent.join('\n');

        fs.writeFileSync(filePath, fileContent, 'binary');

        return;
    };

    let fileContent = [ type.toUpperCase(), leave ];

    fileContent = fileContent.join('\n');

    fs.writeFileSync(filePath, fileContent, 'binary');
};
