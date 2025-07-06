import React from 'react'

function Topbar() {
  return (
    <>
    <div className="container-fluid bg-light p-0">
  <div className="row gx-0 d-none d-lg-flex">
    <div className="col-lg-7 px-5 text-start">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
        <small className="fa fa-map-marker-alt text-primary me-2" />
        <small>Sector 70, Mohali, Punjab, 160070, India</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center py-3">
        <small className="far fa-clock text-primary me-2" />
        <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
      </div>
    </div>
    <div className="col-lg-5 px-5 text-end">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
        <small className="fa fa-phone-alt text-primary me-2" />
        <small>+91 7876626604</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center">
        <a className="btn btn-sm-square bg-white text-primary me-1" href="https://www.facebook.com/">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-1" href="https://x.com/home?lang=en">
          <i className="fab fa-twitter" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-1" href="https://www.linkedin.com/in/bhomick-chaudhary-786a27364/">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="btn btn-sm-square bg-white text-primary me-0" href="https://www.instagram.com/">
          <i className="fab fa-instagram" />
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Topbar