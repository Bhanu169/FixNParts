import React from 'react';
import Services2 from './Services2';
import Booking from './Booking';
import Testimonial from './Testimonial';
import ServicesH from './ServicesH';

function Services() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex py-5 px-4">
                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0" />
                <div className="ps-4">
                  <h5 className="mb-3">Reliable Service Booking</h5>
                  <p>
                    Our platform allows customers to seamlessly book certified mechanics for vehicle service at their convenience.
                  </p>
                  <a className="text-secondary border-bottom" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex bg-light py-5 px-4">
                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0" />
                <div className="ps-4">
                  <h5 className="mb-3">Expert Mechanics</h5>
                  <p>
                    We work with experienced professionals to ensure your car gets the care it deserves — quickly and efficiently.
                  </p>
                  <a className="text-secondary border-bottom" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex py-5 px-4">
                <i className="fa fa-tools fa-3x text-primary flex-shrink-0" />
                <div className="ps-4">
                  <h5 className="mb-3">Auto Parts Delivery</h5>
                  <p>
                    We provide doorstep delivery of essential spare parts through our integrated product ordering system.
                  </p>
                  <a className="text-secondary border-bottom" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <Services2/> */}
      {/* <Booking/> */}
      {/* <Testimonial/> */}
    </>
  );
}

export default Services;
