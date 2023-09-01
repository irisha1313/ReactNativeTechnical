import { TypedUseSelectorHook, useSelector } from "react-redux"

import { RootState } from "@/store/slices/store"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
