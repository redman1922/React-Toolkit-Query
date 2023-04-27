import {api} from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({
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