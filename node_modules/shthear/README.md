<div align="center">
<img src="https://i.ibb.co/3NjLrcq/Shell-Thear.png" alt="WATCIKER" width="600" />

# _**CREATED BY SHELLTHEAR**_

## WhatsApp Scrapper Module!
> 
>
</div><br/>
<br/>

```
Leer Lo Siguiente:
```

## IMPORTANTE

### ☕ JavaScript
```JS
const SH = require('shthear')
```
### 🌎 TypeScript
```TS 
import * as SH from 'shthear'
```

## ```Instalación Y Desinstalación```
> npm install shthear
>  
> npm uninstall shthear


## ```Youtube Descarga Por Enlace 480p```
``` 
const SH = require('shthear');
const link = 'https://youtu.be/VideoID' //Ejemplo: https://youtu.be/WTxYp9ECnPY

SH.ytpp(link)
    .then(result => {
     console.log(result)
});
```

## ```Youtube Descarga Por Enlace 720p```
``` 
const SH = require('shthear');
const link = 'https://youtu.be/VideoID' //Ejemplo: https://youtu.be/WTxYp9ECnPY

SH.ytmg(link)
    .then(result => {
     console.log(result)
});
```

## ```Buscador De Stickers```
``` 
const SH = require('shthear');

(async () => {
    await SH.stickersh(`Mario Kart`).then(Resultado => {
        console.log(Resultado)
    })
})()
```

## ```Descargar Archivos De Mediafire```
``` 
const SH = require('shthear');
const link = const link = 'https://www.mediafire.com/file/FileID' //Ejemplo: https://www.mediafire.com/file/mrolvfl9oj0jstk/Only_Test.rar

    const resultado = await SH.mediafire(link)
        console.log(resultado)
```

## ```Busqueda En Wikipedia```
``` 
const SH = require('shthear');
const query = 'Pokemon'

SH.wikipedia(query)
    .then(result => {
     console.log(result)
});
```