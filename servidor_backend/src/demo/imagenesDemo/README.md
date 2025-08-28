# Images Source
## Param Aggarwal. (2019). Fashion Product Images Dataset [Data set]. Kaggle. https://doi.org/10.34740/KAGGLE/DS/139630

## Imagenes extraidas de `https://www.kaggle.com/datasets/paramaggarwal/fashion-product-images-dataset`. Se van a guardar en el cliente frontend, carpeta `public/`.
Las imagenes de Kaggle se pueden acceder con un token, pero ese token expira tras cierto tiempo. 

Para asegurar la disponibilidad de las imagenes (ya que hay que guardar la URL de la imagen del producto en la DB) se creo una copia de cada imagen de producto demo, en la carpeta `public/` del cliente frontend. 

De esta manera se tiene una URL fija y accesible para cada imagen, ya que todos los archivos en la carpeta `public/` son accesibles agregando el nombre del archivo luego del 'origin'(protocolo+dominio+puerto). 

Por ejemplo, una imagen  `producto1.jpg`:
    1. se guarda en el cliente frontend (Vite) en la carpeta `public/`
    2. el servidor Vite corre localmente en `localhost` puerto `3000`
    3. se podrá acceder a la imagen desde la URL `http://localhost:3000/producto1.jpg`
    4. en la DB, tabla/collection `producto` se deberia guardar **solamente** el nombre del archivo
        -> Ej: `urlFoto: "producto1.jpg"`
    5. en el cliente frontend, se llama a la API, la API busca en la DB y le devuelve al frontend los datos de productos.
        5.1. En el frontend, la `urlFoto` va a tener el valor del nombre del archivo, por lo que faltaria completar el path hacia `public/` para renderizar la imagen. 
        -> Ejemplo: en el frontend se quiere renderizar una imagen de un producto del catalogo.
                1. Crear elemento <img/>
                2. Asignar `href` completando el path a la ubicacion del archivo en `public/`.
                    ->  Si por ejemplo se guardó el archivo en `public/images/productos/producto1.jpg`, la `href` debe ser `"/images/productos/producto1.jpg"`
                    -> El elemento quedaria: <img href="/images/productos/producto1.jpg"/>
        
Es decir, el servidor Vite guarda y envia las imagenes.


---