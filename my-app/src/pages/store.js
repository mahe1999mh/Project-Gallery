import { configureStore } from '@reduxjs/toolkit';
import { projectsApi } from "./store/projectsApi";
import { authApi } from "./store/authApi";

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(projectsApi.middleware)
    .concat(authApi.middleware),
});

export default store;
