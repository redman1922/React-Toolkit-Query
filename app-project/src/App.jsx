import './App.css';
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import {useGetRecipesQuery} from "./store/api/api";
import CreateRecipe from "./components/create-recipe/CreateRecipe";

// const userId = null;

const App = () => {

    const {isLoading,data} = useGetRecipesQuery();
    //     undefined,{
    //     skip: !userId
    // });

    return (
        <div>
            <Header/>
            <CreateRecipe/>
            <section>
                {isLoading
                    ? <div>Loading...</div>
                    :data ? data.map(recipe =>  <RecipeItem key={recipe.id} recipe={recipe}/>) : <div>Not found</div>
                    }

            </section>
        </div>
    );
}

export default App;
