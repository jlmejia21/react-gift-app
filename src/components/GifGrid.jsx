import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((image) => (
          <>
            <li key={image.id}>{image.title}</li>
            <h2>{image.id}</h2>
            <h1> {image.title}</h1>
            <img loading="lazy" src={image.url} alt="" />
          </>
        ))}
      </ol>
    </>
  );
};
