import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import saga from "../sagas/devicesSaga";
import devicesSlice from './devicesSlice';
import createSagaMiddleware from "redux-saga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: { 
    devices: devicesSlice.reducer 
  },
  middleware
})

sagaMiddleware.run(saga);

export default store;