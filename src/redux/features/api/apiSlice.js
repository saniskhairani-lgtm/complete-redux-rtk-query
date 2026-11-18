import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // 1. Store mein iska naam (jaise slice mein 'name' tha)
  reducerPath: 'api',

  // 2. Base URL (jahan se API calls hongi)
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),

  // 3. Endpoints (API ke routes aur unke functions)
  endpoints: (builder) => ({
    // GET request ke liye 'builder.query' use hota hai
    getPosts: builder.query({
      query: () => '/posts?limit=10',
    }),
    addPost: builder.mutation({
        query: (post) => ({
          url: '/posts',
          method: 'POST',
          body: post,
        }),
        async onQueryStarted(_newPost, { dispatch, queryFulfilled }) {
          console.log("onQueryStarted",_newPost)
          try {
            const { data: createdPost } = await queryFulfilled
  
            dispatch(
              apiSlice.util.updateQueryData('getPosts', 10, (draftPosts) => {
                draftPosts.unshift(createdPost)
              })
            )
          } catch (error) {
            console.error('Post creation failed:', error)
          }
        },
      }),

  }),
});

// RTK Query khud endpoint ke naam se hook bana deta hai:
// getPosts -> useGetPostsQuery
export const { useGetPostsQuery, useAddPostMutation } = apiSlice;