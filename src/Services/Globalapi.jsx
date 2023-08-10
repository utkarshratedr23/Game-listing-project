import axios from "axios";
const key="4bf41f8149894ea4aa78eee319c89f11"

const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})
const getGenreList=axiosCreate.get('/genres?key='+key)
const getAllGames=axiosCreate.get('/games?key='+key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}