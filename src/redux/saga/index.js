

// sagas.js
import { all } from "redux-saga/effects";
import watchFetchData from '../saga/formSaga/formSaga';
import watchFetchData2 from './anotherSaga/anotherSaga';

function* rootSaga() {
    yield all([
        watchFetchData(),
        watchFetchData2()
        // watchAnotherAction(),
        // Add other sagas here as needed
    ]);
}

export default rootSaga;

// export const rootSaga = [
//     fork(watchFetchData),
//     fork(watchFetchData2)
// ]