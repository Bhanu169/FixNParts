import React from 'react'
import ServicesH from './ServicesH'
import Team from './Team'
import { Link } from 'react-router-dom';

function Services2() {
  return (
    <>
      <div className="container-xxl service py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">// Our Services //</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav w-100 nav-pills me-4">
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                  <i className="fa fa-car-side fa-2x me-3" />
                  <h4 className="m-0">Diagnostic Test</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                  <i className="fa fa-car fa-2x me-3" />
                  <h4 className="m-0">Engine Servicing</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                  <i className="fa fa-cog fa-2x me-3" />
                  <h4 className="m-0">Tires Replacement</h4>
                </button>
                <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                  <i className="fa fa-oil-can fa-2x me-3" />
                  <h4 className="m-0">Oil Changing</h4>
                </button>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="tab-content w-100">
                {/* Diagnostic Test */}
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: 350 }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-1.jpg" style={{ objectFit: "cover" }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">25 Years Of Experience In Auto Servicing</h3>
                      <p className="mb-4">
                        Our platform enables customers to schedule mechanic diagnostics from the comfort of their homes, ensuring quick detection of issues before they escalate. 
                      </p>
                      <p><i className="fa fa-check text-success me-3" /> On-demand diagnostic bookings</p>
                      <p><i className="fa fa-check text-success me-3" /> Fast and secure appointment system</p>
                      <p><i className="fa fa-check text-success me-3" /> Trusted and certified mechanics</p>
                      <Link to={"/ServMain"} className="btn btn-primary py-3 px-5 animated slideInDown">
                  Learn More
                  <i className="fa fa-arrow-right ms-3" />
                </Link>
                    </div>
                  </div>
                </div>

                {/* Engine Servicing */}
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: 350 }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-2.jpg" style={{ objectFit: "cover" }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">25 Years Of Experience In Auto Servicing</h3>
                      <p className="mb-4">
                        Schedule engine servicing through our booking system and get notified of mechanic availability, job progress, and final reports — all online.
                      </p>
                      <p><i className="fa fa-check text-success me-3" /> Engine inspections and tune-ups</p>
                      <p><i className="fa fa-check text-success me-3" /> Real-time booking updates</p>
                      <p><i className="fa fa-check text-success me-3" /> Admin-monitored mechanic logs</p>
                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More <i className="fa fa-arrow-right ms-3" /></a> */}
                      <Link to={"/ServMain"} className="btn btn-primary py-3 px-5 animated slideInDown">
                  Learn More
                  <i className="fa fa-arrow-right ms-3" />
                </Link>
                    </div>
                  </div>
                </div>

                {/* Tires Replacement */}
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: 350 }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-3.jpg" style={{ objectFit: "cover" }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">25 Years Of Experience In Auto Servicing</h3>
                      <p className="mb-4">
                        Order tire replacements and book installation service in one seamless flow. We ensure verified parts and trusted technicians for every order.
                      </p>
                      <p><i className="fa fa-check text-success me-3" /> Verified tire inventory</p>
                      <p><i className="fa fa-check text-success me-3" /> Schedule fitting service online</p>
                      <p><i className="fa fa-check text-success me-3" /> End-to-end booking + delivery</p>
                      <Link to={"/ServMain"} className="btn btn-primary py-3 px-5 animated slideInDown">
                  Learn More
                  <i className="fa fa-arrow-right ms-3" />
                </Link>
                    </div>
                  </div>
                </div>

                {/* Oil Changing */}
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: 350 }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/service-4.jpg" style={{ objectFit: "cover" }} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">25 Years Of Experience In Auto Servicing</h3>
                      <p className="mb-4">
                        Never miss an oil change again. Our automated system reminds you when it's time and lets you book a mechanic or request home delivery of oil.
                      </p>
                      <p><i className="fa fa-check text-success me-3" /> Scheduled oil change reminders</p>
                      <p><i className="fa fa-check text-success me-3" /> On-site or at-home servicing</p>
                      <p><i className="fa fa-check text-success me-3" /> Transparent order tracking</p>
                      <Link to={"/ServMain"} className="btn btn-primary py-3 px-5 animated slideInDown">
                  Learn More
                  <i className="fa fa-arrow-right ms-3" />
                </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services2;
