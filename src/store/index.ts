import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import {
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// 	persistStore,
// 	persistReducer,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

import blogSliceReducer from '@store/slices/blogSlice'

const rootReducer = combineReducers({
	blogState: blogSliceReducer,
})

// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	// reducer: persistedReducer,
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({
	// 		// serializableCheck: {
	// 		// 	ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		// },
	// 	}).concat(),
})

// export const persistor = persistStore(store)

export default store
