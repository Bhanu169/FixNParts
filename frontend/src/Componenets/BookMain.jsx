import React from 'react';
import Services from './Services';
import Booking from './Booking';

function BookMain() {
  return (
    <>
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(img/carousel-bg-1.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Booking
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li className="breadcrumb-item text-white active" aria-current="page">
                  Booking
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <Services />
      <Booking />

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 col-md-6">
              <h6 className="text-primary text-uppercase">// Call To Action //</h6>
              <h1 className="mb-4">Have Any Pre Booking Questions?</h1>
              <p className="mb-0">
                Curious about how our mechanic booking system works? Need help selecting the right service or auto part? Whether you're looking to schedule routine maintenance or urgent repairs, our support team is here to help you navigate the booking process, understand delivery timelines, or resolve order concerns — ensuring your experience is smooth from click to completion.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                <h3 className="text-white mb-4">
                  <i className="fa fa-phone-alt me-3" />
                  +91 7876626604
                </h3>
                <a href="" className="btn btn-secondary py-3 px-5">
                  Contact Us
                  <i className="fa fa-arrow-right ms-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookMain;
