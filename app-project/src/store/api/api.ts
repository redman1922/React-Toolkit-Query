import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IRecipe} from "../../types/recipe.types.ts";

const API_URL = 'http://localhost:4200/recipes';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder => ({
        getRecipes: builder.query<IRecipe[],string>({
            query: (searchTerm) => `/?_sort=id&_order=desc&q=${searchTerm}`,
            providesTags:(result, error, searchTerm) => [{
                type: 'Recipe',
                id:searchTerm
            }]
        }),
    }),
})

export const {useGetRecipesQuery} = api;