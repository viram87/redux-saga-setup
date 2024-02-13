// sagas.js
import { put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA, fetchDataFailure, fetchDataSuccess } from "../../action/formAction/formAction";

// Simulate an API call
// const fetchDataApi = async () => {
//     const data = await fetch('https://api.publicapis.org/entries')
//         .then(res => res.json());
//     return data;
// };

function* fetchDataWorker(action) {
    console.log('action: ', action);
    try {
        const data = yield fetch('https://api.publicapis.org/entries').then(res => res.json());
        console.log('data: <><><> ', data);
        yield put(fetchDataSuccess(data));
    } catch (error) {
        yield put(fetchDataFailure(error.message));
    }
}

function* watchFetchData() {
    yield takeEvery(FETCH_DATA, fetchDataWorker);
}
// function* watchFetchData() {
//     yield takeEvery(FETCH_DATA_2, fetchDataWorker);
// }

export default watchFetchData;
