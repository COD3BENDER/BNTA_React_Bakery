const Recipe = ({name,listOfIngredients,price,rating,onButtonClick}) => {

    const handleIncreaseRatingClick = ()=> {
        onButtonClick(rating + 1); // get what ever value count is and add 1 to it and pass it back to onButtonClick
    }

    const handleDecreaseRatingClick = () => {
        if(rating>0){
            onButtonClick(rating -1);
        }
    }

    return(
        // no state as this is a component generally state is handled by container
        <>
            <h3>{name}</h3>
            <p><h3>Ingredients:</h3>{listOfIngredients}</p>
            <h3>Price: {price}</h3>
            <h3>Rating: {rating}</h3>
            <button onClick={handleIncreaseRatingClick}>Increase Rating</button>
            <button onClick={handleDecreaseRatingClick}>Decrease Rating</button>
            <hr/>
        </>
    )

}

export default Recipe