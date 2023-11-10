import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';

import {projectsApi} from "./store/projectsApi"

 const store = configureStore({
    reducer:{
      [projectsApi.reducerPath]:projectsApi.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware)
})

export default store;