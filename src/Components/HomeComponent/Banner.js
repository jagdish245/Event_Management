import React from 'react';
import '../../Styles/banner.css';
import banner from '../../Images/walker-studios-studio-beverly-wilshire-beverly-hills-ca-wedding-2020 copy.webp';
import banner1 from '../../Images/1_C4TiO6nhcXbP6bD0yzIomQ.jpg';


export default function Banner() {
  return (
    <div className="custom-banner">
     <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={banner} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={banner1} class="d-block w-100" alt="..." />
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
