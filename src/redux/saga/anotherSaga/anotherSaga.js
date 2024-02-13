// sagas.js
import { put, takeEvery } from "redux-saga/effects";
import { FETCH_DATA_2, fetchData2Success, fetchData2Failure } from "../../action/anotherAction/anotherAction";

// Simulate an API call
// const fetchDataApi = async () => {
//     const data = await fetch('https://api.publicapis.org/entries')
//         .then(res => res.json());
//     return data;
// };

function* fetchDataWorker(action) {
    console.log('action: ', action);
    try {
        const data = yield fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then(res => res.json());
        console.log('data: <><><> ', data);
        yield put(fetchData2Success(data));
    } catch (error) {
        yield put(fetchData2Failure(error.message));
    }
}

function* watchFetchData2() {
    yield takeEvery(FETCH_DATA_2, fetchDataWorker);
}
// function* watchFetchData() {
//     yield takeEvery(FETCH_DATA_2, fetchDataWorker);
// }

export default watchFetchData2;
