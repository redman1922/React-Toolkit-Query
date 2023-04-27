import styles from './RecipeItem.module.css'
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {useFavorites} from "../../hooks/useFavorites";

const RecipeItem = ({recipe}) => {
    const {favorites} = useFavorites();
    const {toggleFavorites} = useActions();

const isExists =favorites.some(r => r.id ===recipe.id)

    return (<div className={styles.item}>
            <img src={recipe.image} alt={recipe.name} width={100}/>
            <h3>{recipe.name}</h3>
            <button onClick={() =>toggleFavorites(recipe)}>{isExists ? 'Remove frome': "Add to"}Favorites</button>
        </div>
    );
}

export default RecipeItem;
