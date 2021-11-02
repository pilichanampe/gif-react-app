import React from 'react'
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

// const [images, setImages] = useState([]);

// useEffect( () => {
//   getGifs(category)
//     // .then(imgs => setImages(imgs)) esto es lo mismo que poner .then(setImages)
//     .then(setImages)
// }, [ category ]);



  // getGifs();

  return (
    <>
      <h3>{ category }</h3>
      {/* <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem
              key={ img.id  }
              { ...img }
            />
          ))
        }
      </div> */}
    </>
  )
}
