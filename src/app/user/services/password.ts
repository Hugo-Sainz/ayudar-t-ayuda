import { ENV } from "../../../constants/ENV"

export const updatePassword = async (passwordData:any) => {
    const response = await fetch(`${ENV.DATABASE_URL}/pass.php`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passwordData),
    })
    return await response.json()
}