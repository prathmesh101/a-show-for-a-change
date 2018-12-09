import React, { Component } from 'react';
import '../../assets/css/credit-card.css';

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <h2 className="signup-head-text">Your Card on File</h2>
            <div className="div-underline">
              <p>CARD NUMBER</p>
              <input type="number" className="form-control inlineBlock" name="creditCard" id="creditCard" placeholder="1234 5678 3456 2456" size="10" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="div-underline" id="width40">   
              <p>EXPIRE DATE</p>      
              <input type="text" className="form-control inlineBlock" name="expireDate" id="expireDate" placeholder="06 / 18" onChange={this.handleChange} />
            </div>
            <div className="div-underline" id="width40">
            <p>CVV</p>
              <input type="number" className="form-control inlineBlock" name="cvv" id="cvv" placeholder="123" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="div-underline">
            <p>CARDHOLDER NAME</p>
              <input type="text" className="form-control inlineBlock" name="cardholderName" id="cardholderName" placeholder="John Smith" onChange={this.handleChange} />
            </div>
          </div>
          <div className="div-submit">
            <button type="submit" className="buttonGreen" onClick={(event) => this.handleClick(event)} >CONTINUE</button>
          </div>
        </form>
        <div className="div-signIn">
          <p>Don't worry, you will not be charged today.</p>
        </div>
        {/* <div className="div-progressIndicator">
          <svg height="28" width="40">
            <circle className="circle-active" cx="14" cy="14" r="13" fill="#00CB94" />
          </svg>
          <svg height="28" width="40">
            <circle cx="14" cy="14" r="13" fill="grey" />
          </svg>
          <svg height="28" width="40">
            <circle cx="14" cy="14" r="13" fill="grey" />
          </svg>
        </div> */}
      </div>
    )
  }
}

export default CreditCard;