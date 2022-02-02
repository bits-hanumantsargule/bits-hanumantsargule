import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../root.reducer';

// // Middleware: Redux Persist Config
// const persistConfig = {
//     // Root
//     key: 'root',
//     // Storage Method (React Native)
//     storage,
//     // Whitelist (Save Specific Reducers)
//     whitelist: [
//       'global', 'authentication'
//     ],
//     // Blacklist (Don't Save Specific Reducers)
//     blacklist: [
//       'form'
//     ],
//   };
// Middleware: Redux Persist Persisted Reducer
//const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
