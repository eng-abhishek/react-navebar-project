import React from 'react'
import ImgAbout from '../assets/images/about.jpg'
function About() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-secondary text-light py-5">
        <div className="container text-center py-5">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead mt-2">
            Learn more about who we are and what we do
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              MyApp is a modern web application built using React and Bootstrap.
              Our goal is to deliver fast, scalable and user-friendly solutions
              that help businesses grow digitally.
            </p>
            <p className="text-muted">
              We focus on clean UI, maintainable code and performance-driven
              development.
            </p>
          </div>

          <div className="col-md-6 text-center">
          <img
              src={ImgAbout}
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Our Mission & Vision</h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <p className="card-text text-muted">
                    To build modern, reliable and user-friendly web applications
                    that empower businesses and individuals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Our Vision</h5>
                  <p className="card-text text-muted">
                    To become a trusted technology partner delivering impactful
                    digital solutions worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container py-5">
        <div className="row text-center g-4">
          <div className="col-md-3">
            <h2 className="fw-bold text-primary">5+</h2>
            <p className="text-muted">Years Experience</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold text-primary">100+</h2>
            <p className="text-muted">Projects Completed</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold text-primary">50+</h2>
            <p className="text-muted">Happy Clients</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold text-primary">24/7</h2>
            <p className="text-muted">Support</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Want to work with us?</h2>
          <p className="mt-2">
            Let’s build something great together.
          </p>
          <button className="btn btn-primary btn-lg mt-3">
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}

export default About