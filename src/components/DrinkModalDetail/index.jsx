import { Modal, Row, Col, Image } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"

export const DrinkModalDetail = () => {

    const {showModal, handleShowModalClick, recipe, loading} = useDrinks();

    const {strDrink, strDrinkThumb, strInstructions} = recipe

    const showIngredients = () => {

        const ingredients = [];

        for (let i = 1; i <= 15; i++) {

            if(recipe[`strIngredient${i}`]){
                ingredients.push(
                    <li>
    
                        {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
    
                    </li>
                )
            }
          
            
        }

        return ingredients
    }

  return (

    
    <Modal show={showModal} onHide={handleShowModalClick} size="xl">
        <Row>
            <Col>
                <Image
                src={strDrinkThumb}
                alt={`Imagen de ${strDrinkThumb}`}
                fluid
                className="rounded-start"
                />
            </Col>
            <Col>
            <Modal.Header closeButton>
          <Modal.Title>{strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Instructions:</h4>
            <p>{strInstructions}</p>
            <h4>Ingredients & measures</h4>
            <ul>
                {showIngredients()}
            </ul>
        
        </Modal.Body>
            </Col>
        </Row>
       
      </Modal>
  )
}
