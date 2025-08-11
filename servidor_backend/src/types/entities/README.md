# ID tipo `string` en vez de Integer (como se pensó en el Diagrama de Clases)

MongoDB le asigna automáticamente una ID a cada *documento* (un *documento* es el equivalente a una *fila* de una tabla de DB relacional, salvando todas las diferencias de las DB relacionales), y esa ID es un objeto `ObjectId`. Ese ObjectId tiene una string con un numero en hexadecimal, que se obtiene usando `ObjectId().toString()`. El sistema numerico hexadecimal usa digitos del 0 al 9 y despues del 9 sigue con la 'a' hasta la 'f', por eso el type debe ser `string`. 

**No es conveniente implementar un sistema de IDs aparte,** porque muchas funcionalidades de mongoose (y que se usan para los DAOs) están pensadas para usar el `ObjectId` que viene por defecto.



# Tipos de dato Integer y Float

Las validaciones de Integer/Float con 2 decimales (centavos) se delegan a los controllers/servicios. Estas entidades en `types/entities` van a trabajar con el type `number` nativo en JavaScript para tener compatibilidad con los Schemas, Models, DAOs y demas herramientas en que se vayan a usar.

