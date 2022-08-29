import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com'
    }),
    tagTypes:['Contact'],
    endpoints: (builder) => ({
        
        fetchContact: builder.query({
            query: () => `/contacts/`,
            providesTags:['Contact']
        }),
        
        createContact: builder.mutation({
            query: newContact => ({
                url: '/contacts/',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags:['Contact'],
        }),
        

        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),

            invalidatesTags:['Contact'],
        }),
    
    }),
});

export const { 
    useFetchContactQuery,
    useDeleteContactMutation,
    useCreateContactMutation
} = contactApi;