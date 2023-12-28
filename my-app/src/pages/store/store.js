import { configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "./projectsApi";
import { authApi } from "./authApi";
import { usersApi } from "./usersApi";

const store = configureStore({
  reducer: {
    [projectsApi.reducerPath]: projectsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(projectsApi.middleware)
      .concat(authApi.middleware)
      .concat(usersApi.middleware),
});

export default store;
