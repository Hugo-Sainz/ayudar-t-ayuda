import { ENV } from "../../../constants/ENV"

export const uploadConplaints = async(formData:any) =>{
    const response = await fetch(`${ENV.DATABASE_URL}/quejas.php`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Mostrar la respuesta del servidor
    })
    .catch(error => {
        console.error('Error:', error);
    });
    return response
}