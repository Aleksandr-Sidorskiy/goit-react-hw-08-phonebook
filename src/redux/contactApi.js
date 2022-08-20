import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fce973b9e38585cd48c6ff.mockapi.io/contacts/' }),
    endpoints: (builder) => ({
        fechContact: builder.query({
            query: () => `/contacts`,
        }),
        
        createContact: builder.mutation({
            query: newContacts => ({
                
                url: '/contacts',
                method: 'POST',
                body: newContacts,
            }),
        }),

        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts${contactId}`,
                method: 'DELETE',
            }),
        }),
    
    }),
});
// console.log(query)

export const { useFechContactQuery, useDeleteContactMutation, useCreateContactMutation } = contactApi;