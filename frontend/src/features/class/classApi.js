import { apiSlice } from "../api/apiSlice";

export const classApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createClass: builder.mutation({
      query: (data) => ({
        url: "/classes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Class"],
    }),
  }),
});

export const { useCreateClassMutation } = classApi;
