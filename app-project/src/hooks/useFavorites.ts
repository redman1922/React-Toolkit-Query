import {useTypedSelector} from "./useTypedSelector.ts";

export const useFavorites = () => {
    const {favorites} = useTypedSelector(state => state)
    return {favorites}
}

