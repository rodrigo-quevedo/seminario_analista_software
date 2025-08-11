const fs = require("fs");
const path = require("path");

const tsconfig_path = path.resolve("tsconfig.json");
const package_path = path.resolve("package.json");

// Obtener "paths" del tsconfig.json
const tsconfig = JSON.parse(fs.readFileSync(tsconfig_path, "utf-8"));
const pathsMap = tsconfig.compilerOptions.paths || {}


// Setear "_moduleAliases" del package.json, modificando los datos:

const package = JSON.parse(fs.readFileSync(package_path, "utf8"));

package._moduleAliases = {};

for (const [key, [value]] of Object.entries(pathsMap)) { //se usa [value] porque el path mapeado de la ruta es un Array
    package._moduleAliases[key.replace("/*", "")] = value.replace("/*", "");//sacar el '/*' del alias y del path. Ademas, se usa solamente el string (en vez del string dentro de un Array).
}

fs.writeFileSync(package_path, JSON.stringify(package, null, 2));
console.log("path aliases: package.json ✅");