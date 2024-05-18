import { useEffect, useState } from "react"

export const useFetch = (url, dataType) => {
    const [data, setData] = useState(dataType)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrormsg] = useState("")

    const getdata = async ()=>{
        try {
            setIsLoading(true)
            const res = await fetch(url);
            if (!res.ok) {
                throw Error("Some Thing Wen Worng!!!")
            }
            const result = await res.json()
            setData(result)
            setErrormsg("")
            setIsLoading(false)

        } catch (error) {
            setIsLoading(false)
            setErrormsg(error.message)
        }
    }

    useEffect(()=> {getdata()},[url])


    return { data, errorMsg, isLoading }
}