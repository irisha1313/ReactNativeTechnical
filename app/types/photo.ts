export type IPhotos = IPhoto[]

export interface IPhoto {
	albumId: number
	id: number
	title: string
	url: string
	thumbnailUrl: string
}

export interface PhotoSliceState {
	favo: IPhotos
	item: IPhotos
	searchValue: string
}
