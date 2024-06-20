import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Lightbox({ thumbnail, images }) {
  const [toggler, setToggler] = useState(false);
  console.log(images);
  return (
    <>
      <img
        src={thumbnail}
        alt="product-image"
        className="img-fluid"
        onClick={() => setToggler(!toggler)}
      />
      <FsLightbox
              toggler={toggler}
              
        sources={images}      
      />
    </>
  );
}

export default Lightbox;
