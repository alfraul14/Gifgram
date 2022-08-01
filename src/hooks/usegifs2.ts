import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'
interface Props{
    title:any,
    id:any,
    url:any
}
export const useGifs2 = () => {
  const [gifs, setGifs] = useState<Props[]>([])
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    // setLoading(true)
    getGifs().then(gifs => setGifs(gifs)
    )
    // console.log(gifs)
    // setLoading(false)
  }, [])

  return {
    gifs
  }
}
