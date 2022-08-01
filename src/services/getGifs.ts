import { fromApiResponseToGifs } from '../adapters/fromApiResponseToGifs'

// const apiKey = 'p4Aup9F9f3KTOtTy8GbRpIEjNofwCmHu'
interface Props{
    title:string,
    id:string,
    url:string
}

export const getGifs = (keyword :string = 'rick'):Promise<Props[]> => {
  const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=p4Aup9F9f3KTOtTy8GbRpIEjNofwCmHu&q=panda&limit=25&offset=0&rating=g&lang=en'
  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
