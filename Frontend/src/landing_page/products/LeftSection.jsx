import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col p-5">
          <img src={imageURL} alt="" style={{width:"97%"}} />
        </div>
        <div className="col p-5">
          <h2>{productName}</h2>
          <p >{productDescription}</p>
          <div >
            <a href={tryDemo}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{marginLeft:"40px"}}>
              <img src="media/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
