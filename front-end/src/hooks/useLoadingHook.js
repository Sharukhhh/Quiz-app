import { useState } from "react"

export const useLoadingHook = () => {

    const [isLoading , setIsLoading] = useState(false);

    return {
        isLoading , 
        setIsLoading
    }
}