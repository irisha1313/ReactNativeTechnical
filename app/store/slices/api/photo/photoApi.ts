import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { IPhotos } from "@/types/photo"

const API_URL = "https://jsonplaceholder.typicode.com"

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["Photos"],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: builder => ({
		getPhotos: builder.query<IPhotos, string>({
			query: (seatch: string) => ({
				url: `/photos?albumId=1`,
				params: {
					q: seatch
				}
			})
		})
	})
})

export const { useGetPhotosQuery } = api
