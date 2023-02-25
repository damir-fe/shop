import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = url => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then(response => {
                setProducts(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setError("Что-то пошло не так...")
                setIsLoading(false)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [url])

    return { products, error, isLoading }
}

export default useFetch