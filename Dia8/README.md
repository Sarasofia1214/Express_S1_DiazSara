# Express Sara Diaz

El departamento académico de CampusLands desea crear un programa que le permita llevar el seguimiento académico de todos los campers que se encuentran matriculados en el programa intensivo de programación.

---
## Documentacion API Campuslands – Campers

##  1. Obtener todos los campers
- Método:`GET`  
- URL:`/api/campers`  
curl -X GET http://localhost:3000/api/campers
- Descripción: Devuelve la lista completa de campers almacenados en la base de datos.  

### Ejemplo de request:
```bash
curl http://localhost:3000/api/campers
```

## Obtener un camper por ID

GET /api/campers/:id

Request:
curl -X GET http://localhost:3000/api/campers

Response (200):
{
  "_id": "6892b70b1475817e64a19938",
  "ID": "6677889501",
  "Nombre": "Andrés Felipe",
  "Apellido": "Garcia Vargas",
  "Direccion": "Cra 15 #18-09",
  "Acudiente": "María Garcia",
  "Numero de celular": 3152334455,
  "Numero de telefono fijo": 6123456789,
  "Estado": {
    "En proceso": false,
    "Inscrito": true,
    "Aprobado": true,
    "Rechazado": false,
    "Cursando": false,
    "Graduado": false,
    "Expulsado": false,
    "Retirado": false,
    "Riesgo": true
  },
  "grupo": "P_2",
  "notas": {}
}

Response (404):
{ "message": "Camper no encontrado" }


