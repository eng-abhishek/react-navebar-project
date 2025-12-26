import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-light py-5">
        <div className="container text-center py-5">
          <h1 className="display-5 fw-bold">
            Welcome to <span className="text-primary">Tutedue</span>
          </h1>
          <p className="lead mt-3">
            Best educational website for all type of IT Cources..
          </p>
          <div className="mt-4">
            <Link to='https://tutedude.com/'><button className="btn btn-primary btn-lg me-3">
              Get Started
            </button>
            </Link>
            <Link to='https://tutedude.com/about'><button className="btn btn-outline-light btn-lg">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center mb-4">
          <h2 className="fw-bold">Our Features</h2>
          <p className="text-muted">
            Everything you need to build scalable applications
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Fast Performance</h5>
                <p className="card-text">
                  Optimized code ensures lightning-fast performance.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Responsive Design</h5>
                <p className="card-text">
                  Looks great on mobile, tablet and desktop devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Easy Customization</h5>
                <p className="card-text">
                  Simple structure, easy to modify and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-primary text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to start your project?</h2>
          <p className="mt-2">
            Create something amazing with React & Bootstrap today.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home