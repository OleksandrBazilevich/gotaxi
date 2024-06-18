import { FC, useState } from "react";
import styles from "./ImageGallery.module.scss";
import { classNames } from "../../lib";

interface IImageGalleryProps {
  images: string[];
  cls?: string;
}

const ImageGallery: FC<IImageGalleryProps> = ({ images, cls = "" }) => {
  const [mainImgIndex, setMainImgIndex] = useState(0);

  return (
    <div className={classNames(styles.gallery, {}, [cls])}>
      <div className={styles.mainImage}>
        <img src={images[mainImgIndex]} alt="Main Car" />
      </div>
      <div className={styles.thumbnails}>
        {images.map((src, index) => (
          <div
            onClick={() => setMainImgIndex(index)}
            className={classNames(styles.thumbnail, {
              [styles.active]: index === mainImgIndex
            })}
            key={index}
          >
            <img src={src} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
