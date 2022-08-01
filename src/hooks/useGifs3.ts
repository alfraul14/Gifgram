import { useEffect, useState } from 'react'
import { fromApiResponseToGifs } from '../adapters/fromApiResponseToGifs'
const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=p4Aup9F9f3KTOtTy8GbRpIEjNofwCmHu&q=panda&limit=25&offset=0&rating=g&lang=en'
interface Props{
    title:string,
    id:string,
    url:string
}
export const gestAsyncGiffs = async ():Promise<Props[]> => {
  const resp = await fetch(apiUrl)
  const data1 = await resp.json()
  return fromApiResponseToGifs(data1)
}

export const useGifs3 = () => {
  const [gifs, setGifs] = useState<Props[]>()
  // const [loading, setLoading] = useState(false)

  const getImages = async () => {
    const newimages = await gestAsyncGiffs()
    setGifs(newimages)
  }
  useEffect(() => {
    // setLoading(true)
    getImages()
    // console.log(gifs)
    // setLoading(false)
  }, [])

  return {
    gifs
  }
}
