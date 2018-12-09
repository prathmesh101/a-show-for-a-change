import React from 'react';
import '../../assets/css/features.css';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className="features-section">

              

              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Services</h2>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  
                  <div className="col-lg-4 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                      <i className="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"></i>
                      <h3 className="mb-3">Buffer free content</h3>
                      <p className="text-muted mb-0">Suggest text for header and this section</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                      <i className="fas fa-4x fa-code text-primary mb-3 sr-icon-3"></i>
                      <h3 className="mb-3">HD content</h3>
                      <p className="text-muted mb-0">Suggest text for header and this section</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 text-center">
                    <div className="service-box mt-5 mx-auto">
                      <i className="fas fa-4x fa-heart text-primary mb-3 sr-icon-4"></i>
                      <h3 className="mb-3">Support Creators</h3>
                      <p className="text-muted mb-0">Suggest text for header and this section</p>
                    </div>
                  </div>
                </div>
              </div>
    

        </div>

    )
}

export default Features;

