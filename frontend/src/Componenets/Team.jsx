import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Team() {
  const [mechanics, setMechanics] = useState([])

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const res = await axios.get("http://localhost:6942/user/findMechAll")
        setMechanics(res.data || [])
      } catch (err) {
        console.error("Error fetching mechanics:", err)
      }
    }
    fetchMechanics()
  }, [])
  return (
    <>
    <div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="text-primary text-uppercase">// Our Technicians //</h6>
      <h1 className="mb-5">Our Expert Technicians</h1>
    </div>
    <div className="row g-4">
            {mechanics.slice(0, 4).map((mech, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + (index % 4) * 0.2}s`}
                key={index}
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img
                    style={{ height: "250px", width: "300px" }} 
                      src={mech?.picImg} alt="" />
                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square mx-1" href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="fw-bold mb-0">{mech.name}</h5>
                    <small>{mech.designation}</small>
                  </div>
                </div>
              </div>
            ))}
            {mechanics.length === 0 && (
              <p className="text-center text-muted">No mechanics found.</p>
            )}
            {mechanics.length > 4 && (
    <div className="text-center mt-4">
      <a href="/TeamMain" className="btn btn-primary">View All Mechanics</a>
    </div>
  )}
          </div>
  </div>
</div>

    </>
  )
}

export default Team