const fs = require('fs'),
path = require('path'),
os = require('os')
let json = {}


let categories = fs.readdirSync(path.join(__dirname)); 
const index = categories.indexOf('main.js');
if (index > -1) {
    categories.splice(index, 1);
}

const indexdata = categories.indexOf('emojis.json');
if (indexdata > -1) {
    categories.splice(indexdata, 1);
}

const imports = categories.indexOf('imports.js');
if (imports > -1) {
    categories.splice(imports, 1);
}
let importsFile = []
categories.forEach(e => {
    let files = fs.readdirSync(path.join(__dirname + '/' + e))
    for (let i = 0; i < files.length; i++) {
        importsFile.push(`import ${files[i].split('.')[0].split(' ').join('_').toLowerCase()} from "./${e}/${files[i]}";`)
        importsFile.push('\n')
        files[i] = JSON.parse(`{"url":"${files[i]}", "name":"${files[i].split('.')[0].split(' ').join('_').toLowerCase()}"}`)
    }
    json[e] = files
});

fs.writeFileSync(path.join(__dirname + '/imports.js'), importsFile.join(''))
fs.writeFileSync(path.join(__dirname + '/emojis.json'), JSON.stringify(json, null, '\t'))