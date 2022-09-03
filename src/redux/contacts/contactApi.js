import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        
        prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    }),

    tagTypes:['Contact'],
    endpoints: (builder) => ({
        
        fetchContact: builder.query({
            query: () => `/contacts`,
            providesTags:['Contact']
        }),
        
        createContact: builder.mutation({
            query: (newContact, description) => ({
                url: '/contacts',
                method: 'POST',
                body: newContact,
                description,
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