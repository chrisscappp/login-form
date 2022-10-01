import { axios } from '../../utils/axios'

export const getData = () => {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/users`)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
                console.error('PIECE DA')
            })
    })
}