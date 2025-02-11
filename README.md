# Laboratorio #2 - Adoption System

## Descripción
Este proyecto esta hecho para llevar acabo una administracion de adopciones

- Node.js
- MongoDB
- Express

## Librerías Adicionales Utilizadas
- Bcrypt
- Mongoose
- JWT

## Genereales
Este codigo sirve para hacer citas, dandonos funciones de agregar una cita, editar una cita, cancelar una cita, listar citas
y editar las fotos de los usuarios




## Solicitudes en Postman

### Update Profile Picture
- **URL**: `http://127.0.0.1:3000/adoptionSystem/v1/user/updateProfilePicture/:uid`
- **Método**: `patch`
- **Cuerpo**:
  
![form](https://github.com/user-attachments/assets/e5d60df3-7dcd-4317-a237-9cb875f47a02)

### List Appointment
- **URL**: `(http://127.0.0.1:3000/adoptionSystem/v1/appointment/)`
- **Método**: `get`

### Edit Appointment
- **URL**: `http://127.0.0.1:3000/adoptionSystem/v1/appointment/updateAppointment/:uid`
- **Método**: `PATCH`
- **Json**:
  {
  "date": "2028-12-15T14:24:00.0000",
  "status": "CREATED",
  "pet": "67aab8138f218b195e381c28",
  "user": "67aab5688f218b195e381c21"

}
### Cancelled Appointment
- **URL**: `http://127.0.0.1:3000/adoptionSystem/v1/appointment/changeAppointment/:uid`
- **Método**: `PATCH`
- ** Json**: `Vacio`
  ![JsonCancelled](https://github.com/user-attachments/assets/e47112ff-b766-479a-80e3-92fe0e322f67)





