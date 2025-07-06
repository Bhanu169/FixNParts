import React from 'react';

function Testimonial() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">// Testimonial //</h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>

          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              {/* Testimonial 1 (Active) */}
              <div className="carousel-item active text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="img/testimonial-1.jpg"
                  alt="Ravi Sharma"
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">Anjali Verma</h5>
                <p>Marketing Executive</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    The mechanic booking process was super quick, and I loved how I could track my request in real time. Great service!
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="carousel-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="img/testimonial-2.jpg"
                  alt="Anjali Verma"
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">Ravi Sharma  </h5>
                <p>Software Developer</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    I received the parts I ordered within 24 hours. Super efficient and the platform is very user-friendly.
                  </p>
                </div>
              </div>

              {/* Testimonial 3 (New Added) */}
              <div className="carousel-item text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-3"
                  src="img/testimonial-3.jpg"
                  alt="Sandeep Malhotra"
                  style={{ width: 80, height: 80 }}
                />
                <h5 className="mb-0">Sandeep Malhotra</h5>
                <p>Cab Fleet Manager</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Managing our entire cab fleet's maintenance became easier with this platform. I can track bookings and parts in one place.
                  </p>
                </div>
              </div>

            </div>

            {/* Navigation Buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
