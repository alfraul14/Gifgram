import { useEffect, useState } from 'react'

export const useGifs = () => {
  const [gifs, setGifs] = useState()
  // const [loading, setLoading] = useState(false)
  useEffect(() => {
    // setLoading(true)
    const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=p4Aup9F9f3KTOtTy8GbRpIEjNofwCmHu&q=panda&limit=25&offset=0&rating=g&lang=en'
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        const { data } = res
        const gifs = data.map((image:any) => {
          const { images, title, id } = image
          const { url } = images.downsized_medium
          return { title, id, url }
        })
        setGifs(gifs)
        console.log(gifs)
      })
    // console.log(gifs)
    // setLoading(false)
  }, [])

  return {
    gifs
  }
}
