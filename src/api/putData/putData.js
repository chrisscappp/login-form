import { axios } from '../../utils/axios'

export const putData = async (data) => {
    await axios.put(`http://localhost:3000/users/${data.id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch((err) => {
            console.error("Всё...", err)
        })
}