# Path aliases
Un alias de path es un string que apunta a un directorio. Por ejemplo, se puede usar el alias '@middleware/ejemplo.ts' para apuntar a src/middleware, y de esa manera no hace falta estar usando los relative paths (ej. '../../../../middleware/ejemplo.ts') que son tediosos si el proyecto escala y hay muchos subdirectorios.

Para usar Path aliases, hay que configurarlos en TS y en el runtime (en este caso Node.js 22) por separado.

## En TypeScript
Dentro del tsconfig.json, setear "paths". Esto tiene efecto sobre: editor de codigo y compilador TS. El editor de codigo podra "Ir a la definicion" de los imports cuando se usen Path aliases. El compilador TypeScript dejara de tirar error al usar los Path aliases.

Sin embargo, el codigo JavaScript compilado seguirá teniendo el Path alias tal cual, es decir, el codigo JavaScript compilado no tendrá la direccion a la que apunta el alias. 

Esto va a dar un error de compilacion al ejecutar el archivo JavaScript generado por TypeScript.

**Los aliases y paths mapeados en `"paths"` deben terminar en `/*` si apuntan a un directorio. Además el path mapeado debe ser un string dentro de un array (por ejemplo: `["./src/controllers/*"]`).** 


## En el runtime
Para evitar el error de compilación, hay que mapear los paths al momento de compilar los archivos JavaScript. Esto en Node.js 22 se logra con la libreria module-alias. 

Para usar module-alias, hay que agregar los mapeos en el "package.json". La propiedad que hay que agregar se llama "_moduleAliases".

**Ni los aliases ni los paths en `"_moduleAliases"` deben terminar en `/*`, porque los directorios se mapean automaticamente en la libreria `module-alias`. Aca el path mapeado es solamente un string (no hay que usar Array como en el `tsconfig.json`).** 


## Solucion

### 1. Setear `paths` en `tsconfig.json`

Para que el editor de texto no tire error de path mientras se programa, y para que el la compilación de TypeScript a JavaScript sea exitosa, **debemos agregar el mapeo de paths manualmente en el `tsconfig.json`.**.
```
//tsconfig.json
{
    "paths": {
        "@controllers/*": ["./src/controllers/*"],
        "@routes/*": ["./src/routes/*"],
        "@middlewares/*": ["./src/middlewares/*"],
        "@types/*": ["./src/types/*"],
        "@utils/*": ["./src/utils/*"] 
    }
}
```


### 2. Script

Paso seguido, habría que actualizar manualmente el `package.json`, mucho mejor automatizar esta actualizacion.

Para automatizar, podemos hacer un script de Node.js. Este script se va a ejecutar antes de la compilación de TypeScript. Solo hay que modificar los comandos npm (o del gestor de paquetes que se este usando: yarn, pnpm, etc.).

Antes:
```
//package.json
 "scripts": {
    "dev": "ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },
```

Ahora:
```
//package.json
 "scripts": {
    "dev": "node scripts/updatePathsAliases/updatePathsAliases.js &&  ts-node src/server.ts",
    "build": "node scripts/updatePathsAliases/updatePathsAliases.js && tsc",
    "start": "node dist/server.js"//aca la compilacion ya esta hecha, no hace falta modificarlo
  },
```


Tener en cuenta: Dado que los archivos .json no pueden usar `import`, hay que sobreescribir el archivo `package.json` usando librerias de filesystem del OS (libreria "fs" en Node.js)

### 3. Instalar dependencia del runtime

Para Node.js 22
```
npm i module-alias
```

### 4. Activar dependencia en el servidor

En el caso de `module-alias`, hay que activarlo apenas inicia el programa (antes de que se use cualquier Path alias):
```
//server.ts
require('../../../../some/very/deep/module')
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
//etc
```

El archivo de inicio del programa se puede ver en "main" del `package.json`:
```
//package.json
{    
    (...)
    "main": "dist/server.js"
}
```