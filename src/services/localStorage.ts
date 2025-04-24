interface UserData {
    Data: {
      correo: string;
      nombre: string;
      fecha_nac: string;
      lugar_nac: string;
      sexo: string;
      direccion: string;
      telefono: string;
      nombre_emp: string;
      puesto: string;
      rol: string;
      id_empleado: string;
    };
  }
  

export function setLocalStorage(response: UserData, token:string){
    localStorage.setItem('correo', response.Data.correo);
    localStorage.setItem('nombre_completo', response.Data.nombre);
    localStorage.setItem('fecha_nacimiento', response.Data.fecha_nac);
    localStorage.setItem('lugar_nacimiento', response.Data.lugar_nac);
    localStorage.setItem('sexo', response.Data.sexo);
    localStorage.setItem('direccion', response.Data.direccion);
    localStorage.setItem('numero_telefonico', response.Data.telefono);
    localStorage.setItem('empresa', response.Data.nombre_emp);
    localStorage.setItem('puesto', response.Data.puesto);
    localStorage.setItem('rol', response.Data.rol);
    localStorage.setItem('id_empleado', response.Data.id_empleado);

    localStorage.setItem("token", token);
    console.log("Login successful:", response);

}

export function clearLocalStorage(){
    localStorage.clear();
    console.log("Todos los datos del localStorage fueron eliminados.");
}