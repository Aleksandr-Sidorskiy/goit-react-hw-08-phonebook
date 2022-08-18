import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fce973b9e38585cd48c6ff.mockapi.io/contacts' }),
    endpoints: (builder) => ({
        getContactByName: builder.query({
            query: (name) => `contact/${name}`,
        }),
    }),
});

export const { usegetContactByNameQuery } = contactApi;