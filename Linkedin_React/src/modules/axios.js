import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjcwNmVlOTUxYTNhMjAwMTVmMDYzMDIiLCJpYXQiOjE3MTg2NDQ0NTcsImV4cCI6MTcxOTg1NDA1N30.d1F1sQJVfHolAwpdn_mW07WbJuD97d1OwfSDelyP6Ls'

export default axios.create ({ 
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${token}`} 
})