import React, { Component} from 'react';
import '../../assets/css/join-now.css';
//import { Link } from 'react-router-dom';

const JoinNow = () => { 
    return (
        <div className="subscription-plan-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center ">
                  <h2 className="subscription-section-heading-main">Choose a plan to start making a difference</h2>
                    <h4 className="subscription-section-sub-main">Free for 30 days, cancel anytime.</h4>
                    <div className="subscription-set-plan">
                    <h6 id="billedMonthly"
                      className="monthly-bill"
                      onClick={
                        function() {
                          document.getElementById('billedMonthly').classList.add('monthly-bill');
                          document.getElementById('billedAnnually').classList.remove('monthly-bill');
                          const NodeList = document.getElementsByClassName('plan-billed');
                          const arr = Array.from(NodeList);
                          arr.map((div) => {
                            div.innerHTML="Billed Monthly"
                          })
                          document.getElementById('student-plan').innerHTML='$1.99'
                          document.getElementById('standard-plan').innerHTML='$2.99'
                          document.getElementById('premium-plan').innerHTML='$4.99'
                        }
                      }>Billed Monthly </h6>
                    <h6 id="billedAnnually"
                      onClick={
                        function() {
                          document.getElementById('billedAnnually').classList.add('monthly-bill');
                          document.getElementById('billedMonthly').classList.remove('monthly-bill');
                          const NodeList = document.getElementsByClassName('plan-billed');
                          const arr = Array.from(NodeList);
                          arr.map((div) => {
                            div.innerHTML="Billed Annually"
                          })
                          document.getElementById('student-plan').innerHTML='$19.99'
                          document.getElementById('standard-plan').innerHTML='$29.99'
                          document.getElementById('premium-plan').innerHTML='$49.99'
                        }
                      }
                    
                    >Billed Annually </h6>

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
                <div className="plan-price" id="student-plan">$1.99</div>
                <div className="plan-billed">Billed Monthly</div>
                <div className="plan-device">1 device</div>
                <div className="plan-format">Standard Definition</div>
                <div className="plan-type">Valid Student ID Required</div>
                <button type="button" className="btn btn-success plan-button">START YOUR FREE TRIAL</button>
              </div>
            </div>
          </div>

            <div className="col-lg-4 col-md-6 text-center center-block">
              <div className="service-box mt-5 mx-auto">
                <div className="flex-container plan">
                  <div className="plan-head">Standard Plan</div>
                  <div className="plan-price" id="standard-plan">$2.99</div>
                  <div className="plan-billed">Billed Monthly</div>
                  <div className="plan-device">1 device</div>
                  <div className="plan-format">Standard Definition</div>
                  <div className="plan-type">No Celebrity Channels</div>
                  <button type="button" className="btn btn-success plan-button">START YOUR FREE TRIAL</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center center-block">
              <div className="service-box mt-5 mx-auto">
                <div className="flex-container plan">
                  <div className="plan-head">Premium Plan</div>
                  <div className="plan-price" id="premium-plan">$4.99</div>
                  <div className="plan-billed">Billed Monthly</div>
                  <div className="plan-device">2 devices</div>
                  <div className="plan-format">High Definition</div>
                  <div className="plan-type">Celebrity Channels</div>
                  <button type="button" className="btn btn-success plan-button">START YOUR FREE TRIAL</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    )
}

export default JoinNow;
