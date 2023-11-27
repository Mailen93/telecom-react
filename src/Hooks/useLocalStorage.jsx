import { useState } from "react"

export const useLocaleStorage = () => {
    const getSavedValue = () => {}
    const [savedValue, setSavedValue] = useState(getSavedValue())
}