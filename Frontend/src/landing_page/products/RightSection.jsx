import React from "react";
function RightSection({
  productName,
  productDescription,
  imageURL,
  linkURL,
  linkCaption,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <a href={linkURL}>
            {linkCaption}
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col ">
          <img src={imageURL} alt="image" style={{width:"97%"}} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
