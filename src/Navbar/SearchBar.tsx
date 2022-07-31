import { useEffect, useState } from 'react'
import { CustomInput, InputContainer } from './styles'

export const SearchBar = () => {
  const [gifs, setGifs] = useState([])
  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=p4Aup9F9f3KTOtTy8GbRpIEjNofwCmHu&q=random&limit=25&offset=0&rating=g&lang=en')
      .then(res => res.json())
      .then(res => {
        const { data = [] } = res.data
        const dataGifs = data.map((image:any) => image?.images?.downsized_medium?.url)
        setGifs(dataGifs)
        console.log(gifs)
      })
  }, [])
  return (
        <InputContainer >
          <CustomInput placeholder='Buscar'/>
        </InputContainer>
  )
}
