import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const api = creatApi({
 baseQuery:fetchBaseQuery({baseUrl:"http://localhost:8000/"}),
  endpoints:(build) => ({
    
  })
})
