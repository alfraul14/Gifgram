interface Props{
  title:string,
  id:string,
  url:string
}

export const fromApiResponseToGifs = (apiResponse:any):Props[] => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}
