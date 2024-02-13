import { FETCH_DATA_2, FETCH_DATA_2_SUCCESS, FETCH_DATA_2_FAILURE } from "../../action/anotherAction/anotherAction";

const formReducer = (state = { data: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case FETCH_DATA_2:
            return { ...state, loading: true, error: null };
        case FETCH_DATA_2_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_2_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default formReducer;