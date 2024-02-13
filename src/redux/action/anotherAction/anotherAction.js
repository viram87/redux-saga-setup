export const FETCH_DATA_2 = "FETCH_DATA_2";
export const FETCH_DATA_2_SUCCESS = "FETCH_DATA_2_SUCCESS";
export const FETCH_DATA_2_FAILURE = "FETCH_DATA_2_FAILURE";

export const fetchData2 = (data) => ({
    type: FETCH_DATA_2,
    payload: data,
});

export const fetchData2Success = (data) => ({
    type: FETCH_DATA_2_SUCCESS,
    payload: data,
});

export const fetchData2Failure = (error) => ({
    type: FETCH_DATA_2_FAILURE,
    payload: error,
});