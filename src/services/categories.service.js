import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL


export const getCategoriesService = async() => {
 try {
    
    const url = `${apiURL}list.php?c=list`
    const {data} = await axios.get(url)
    
    return data.drinks || []


 } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al obtener las categorias")
 }
}
