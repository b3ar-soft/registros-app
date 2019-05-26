# registros-app(api)
_Es una api-REST para manejar de una manera optima los registros de un evento scout._

## Comenzando
_Podras descargar una copia del archivo CSV en **/template** , con ella puedes cargar todos los datos de los registros que alimentaran la api._

 _Una vez que los datos esten cargados dentro de la base de datos puedes realizar las siguientes operaciones:_
 
 * Obtener todos los registro **(get) '/registry'**
 * Buscar los registros por _id_ **(get) '/registry/:id'**
 * Modificar registros **(put) '/registry/update/:id'**
 * Eliminar registros **(delete) '/registry/delete/:id'**
 
 ## Estructura de objeto registro (Registry)
 
 ```
 registry {
    _id: ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    cum: {
        type: String,
        required: true,
        unique: true
    },
    group: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    checkin: {
        type: Boolean,
        default: false
    },
    folio: {
        type: String,
        default: ''
    }
}
 ```
 
## Dependencias
_Estas son las dependencias usadas en este proyecto:_

* [Express](https://expressjs.com/es/)
* [Body-Parser](https://www.npmjs.com/package/body-parser) 
* [Express-fileupload](https://www.npmjs.com/package/express-fileupload)
* [fast-csv](https://www.npmjs.com/package/fast-csv)
* [json2csv](https://www.npmjs.com/package/json2csv)
* [mongoose](https://mongoosejs.com/)
* [nodemon](https://www.npmjs.com/package/nodemon)

## Autores
**Luis Manuel Torres Treviño** [b3ar-soft](https://github.com/b3ar-soft)

---
⌨️ con ❤️ por [b3ar-soft](https://github.com/b3ar-soft)
