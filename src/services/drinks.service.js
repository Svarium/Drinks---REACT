import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL

export const filterDrinksService = async(ingredient, category) => {
    try {
        const url = `${apiURL}filter.php?i${ingredient}&c=${category}`;

        const {data} = await axios.get(url)
        return data.drinks || []

    } catch (error) {
        console.log(error);
        throw new Error("Hubo un error al filtrar las bebidas");
    }
}

export const getRecipeService = async(drinkId) => {
    try {
        const url = `${apiURL}lookup.php?i=${drinkId}`;
        const {data} = await axios.get(url)
        return data.drinks[0] || []
    } catch (error) {
        console.log(error);
        throw new Error("Hubo un error al obtener la receta");
    }
}

/* export const getDrinkByIdService = async(drinkId) => {
    try {
        const url = `${apiURL}`
    } catch (error) {
        console.log(error);
        throw new Error("Hubo un error al obtener la bebida");
    }
} */