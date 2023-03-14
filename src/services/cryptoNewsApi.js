import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-rapidapi-key': '883532e8bbmsh46016fb7b1715eep179490jsn026ecb82778a',
  'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
};

const baseUrl = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/Search/ImageSearchAPI?q=${newsCategory}&pageNumber=1&pageSize=${count}&autoCorrect=true`),
    }),
    // getCryptoNewsCategory: builder.query({
    //   query: () => createRequest(`/Search/ImageSearchAPI?q=crypto&pageNumber=1&pageSize=10&autoCorrect=true`),
    // //   query: () => createRequest(`/Search/ImageSearchAPI?q=crypto`),
    // }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
