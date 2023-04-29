import './App.css';
import Header from "./components/header/Header.tsx";
import RecipeItem from "./components/recipe-item/RecipeItem.tsx";
import {useGetRecipesQuery} from "./store/api/api.ts";
import CreateRecipe from "./components/create-recipe/CreateRecipe.tsx";
import {useState} from "react";

// const userId = null;

const App = () => {

    const [searchTerm,setSearchTerm] = useState('');
    const [queryTerm,setQuetyTerm] = useState('');

    const {isLoading,data} = useGetRecipesQuery(queryTerm);
    //     undefined,{
    //     skip: !userId
    // });

    const handleSearch = () =>{
        setQuetyTerm(searchTerm);
    }

    return (
        <div>
            <Header/>
            <CreateRecipe/>
            <div style={{padding:10}}>
                <p>If you wanna find:</p>
                <input type="search" value={searchTerm} placeholder='Enter search' onChange={e => setSearchTerm(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
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
