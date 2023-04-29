import {api} from "./api.ts";
import {IRecipeData} from "../../types/recipe.types.ts";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation<null,IRecipeData>({
            query: (reсipe) => ({
                body: reсipe,
                url: '/',
                method: 'POST'
            }),
                invalidatesTags: () => [{
                type:'Recipe',
                }]
        }),
    }),
})

export const {useCreateRecipeMutation} = recipeApi;

// useMutation