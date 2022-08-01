import { CustomInput, InputContainer } from './styles'
import { useGifs3 } from '../hooks/useGifs3'

export const SearchBar = () => {
  const { gifs } = useGifs3()
  console.log(gifs)
  return (<>
        <InputContainer >
          <CustomInput placeholder='Buscar'/>
        </InputContainer>
        <h1>
            {JSON.stringify(gifs)}
        </h1>
        </>
  )
}
