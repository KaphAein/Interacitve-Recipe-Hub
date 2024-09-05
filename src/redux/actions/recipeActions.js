import axios from 'axios';

export const fetchRecipes = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/api/recipes');
        dispatch({ type: 'FETCH_RECIPES_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_RECIPES_FAIL', payload: error.message });
    }
};

const initialState = {
    recipes: [],
    error: null,
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RECIPES_SUCCESS':
            return { ...state, recipes: action.payload };
        case 'FETCH_RECIPES_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default recipeReducer;
