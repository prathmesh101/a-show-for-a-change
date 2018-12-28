import React from 'react';
import '../../assets/css/join-now.css';
import { Link } from 'react-router-dom';

const JoinNow = () => {
    return (
        <div className="subscription-plan-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center ">
                  <h2 className="subscription-section-heading-main">Choose a plan to start making a difference</h2>
                    <h4 className="subscription-section-sub-main">Free for 30 days, cancel anytime.</h4>
                    <div className="subscription-set-plan">
                    <h6 className="monthly-bill">Billed Monthly </h6>
                    <h6>Billed Annually </h6>

                    </div>
                </div>
              </div>
            </div>

        <div className="container">
          <div className="row">

          <div className="col-lg-4 col-md-6 text-center center-block">
            <div className="service-box mt-5 mx-auto">
              <div className="flex-container plan">

                <div className="plan-head">Student Plan</div>
                <div className="plan-price">$1.99</div>
                <div className="plan-billed">Billed Monthly</div>
                <div className="plan-device">1 device</div>
                <div className="plan-format">Standard Definition</div>
                <div className="plan-type">Valid Student ID Requirede</div>
                <div className="plan-button">START FREE TRIAL</div>
              </div>
            </div>
          </div>


            <div className="col-lg-4 col-md-6 text-center center-block">
              <div className="service-box mt-5 mx-auto">
                <div className="flex-container plan">

                  <div className="plan-head">Standard Plan</div>
                  <div className="plan-price">$2.99</div>
                  <div className="plan-billed">Billed Monthly</div>
                  <div className="plan-device">1 device</div>
                  <div className="plan-format">Standard Definition</div>
                  <div className="plan-type">Celebrity Channels</div>
                  <div className="plan-button">START FREE TRIAL</div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center center-block">
              <div className="service-box mt-5 mx-auto">
                <div className="flex-container plan">

                  <div className="plan-head">Premium Plan</div>
                  <div className="plan-price">$4.99</div>
                  <div className="plan-billed">Billed Monthly</div>
                  <div className="plan-device">2 device</div>
                  <div className="plan-format">High Definition</div>
                  <div className="plan-type">Celebrity Channels</div>
                  <div className="plan-button">START FREE TRIAL</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    )
}

export default JoinNow;
