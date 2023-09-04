import {useState} from "react";
import Recipe from "../components/recipe";
import {renderToReadableStream} from "react-dom/server";

const RecipeContainer = () => {

    const [victoriaRating, setVictoriaRating] = useState(0); // initial state can be anything basically how the object starts
    const [treeRating, setTreeRating] = useState(0);
    const [carrotRating, setCarrotRating] = useState(0);

    return(
        <>
        <h2>Cakes:</h2>
            <Recipe
                name={"Victoria Sponge"}
                listOfIngredients={ [
                    "eggs ",
                    "butter ",
                    "sugar ",
                    "self-raising flour ",
                    "baking powder ",
                    "milk "
                ]}
                price={5}
                rating={victoriaRating}
                onButtonClick={setVictoriaRating}
                />
            <Recipe
                name={"Tea Loaf"}
                listOfIngredients={[
                    "eggs ",
                    "oil",
                    "dried fruit ",
                    "sugar ",
                    "self-raising flour ",
                    "strong tea ",
                ]}
                price={2}
                rating={treeRating}
                onButtonClick={setTreeRating}
            />
            <Recipe
                name={"Carrot Cake"}
                listOfIngredients={ [
                    "carrots ",
                    "walnuts ",
                    "oil ",
                    "cream cheese ",
                    "flour ",
                    "sugar ",
                ]}
                price={8}
                rating={carrotRating}
                onButtonClick={setCarrotRating}
            />
        <p>Average Rating: {carrotRating+treeRating+victoriaRating/3}</p>
        </>
    )

}
export default RecipeContainer;