import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoanding } = useFetchGifs( category );
  console.log({ isLoanding });
  

  return (
    <>
        <h3>{ category }</h3>

        {
          // isLoanding ? ( <h2> Cargando...</h2> ) : null 
          isLoanding && ( <h2> Cargando...</h2> )
        }
        <div className="card-grid">
        {
          images.map( (image) => (
           <GifItem 
              key={ image.id }
                  {...image}
              />
          ))
        }
        </div>
    </>
  )
}

