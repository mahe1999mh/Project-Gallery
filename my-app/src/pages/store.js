import { configureStore } from '@reduxjs/toolkit';
import { projectsApi } from "./store/projectsApi";

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(projectsApi.middleware)
});

export default store;
