import React from 'react'
import { useLocation } from "react-router-dom";



const Product = () => {
    const location = useLocation();
    const product= location.state;
    console.log(product);

return (
      <>
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                    <img class="card-img-top mb-5 mb-md-0" src={location.state.image} alt="..." />
                    </div>
                    <div class="col-md-6">
                        
                        <h1 class="display-5 fw-bolder">{location.state.title}</h1>
                        
                        <div class="fs-5 mb-5">
                            
                        </div>
                        <p class="lead">{location.state.paragraph}</p>
                        <div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{max_width: "3rem"}} />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                        </div>
                </div>
            </div>
        </section>
      </>
       
      )   
}
export default Product;
