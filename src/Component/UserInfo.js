import React from 'react'
import UserImg from '../assets/images/user.jpg'

function UserInfo() {
  return (
    <>
    {/* Page Header */}
      <div className="bg-primary text-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold">User Information</h1>
          <p className="lead mt-2">
            View and manage your personal details
          </p>
        </div>
      </div>

      {/* User Card */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body">
                <div className="text-center mb-4">
                  <img
                    src={UserImg}
                    alt="User Avatar"
                    className="rounded-circle mb-3"
                  />
                  <h4 className="fw-bold">Demo User</h4>
                  <p className="text-muted">demo.user@example.com</p>
                </div>

                <hr />

                <div className="row mb-3">
                  <div className="col-5 fw-semibold">Phone</div>
                  <div className="col-7 text-muted">+91 98765 43210</div>
                </div>

                <div className="row mb-3">
                  <div className="col-5 fw-semibold">Address</div>
                  <div className="col-7 text-muted">
                    New Delhi, India
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-5 fw-semibold">Joined On</div>
                  <div className="col-7 text-muted">12 Aug 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo