import fs from 'fs';
import path from 'path';
import sass from 'node-sass';

function write ({outFile, input}, data) {
    const changeToCSS = sheet => sheet.replace(/(scss)$/ig, 'css');

    fs.writeFile(outFile.concat(changeToCSS(path.basename(input))), data, function (error) {
        if (error) {
            throw `fs.writeFile ${error}`;
        }
        console.log(`Saving ${input} to directory ${outFile}!`);
    });
}

function runNodeSass (options) {
    if (options.input) {
        sass.render({file: options.input}, function(error, results) {
            if (error) {
                throw `read > sass ${error}`;
            }
            write(options, results.css);
        });
    } else {
        throw '"input" property is mandatory';
    }
}

export default runNodeSass;