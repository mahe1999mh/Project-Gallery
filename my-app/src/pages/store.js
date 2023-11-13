import { configureStore } from '@reduxjs/toolkit';
import { projectsApi } from "./store/projectsApi";
import { adminProjectsApi } from "./store/adminProjectsApi"
import { authApi } from "./store/authApi";

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [adminProjectsApi.reducerPath]: adminProjectsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(projectsApi.middleware)
    .concat(authApi.middleware)
    .concat(adminProjectsApi.middleware)
});

export default store;
