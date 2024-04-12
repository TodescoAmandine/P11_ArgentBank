import React from 'react';

const Account = ({type, number, amount, description}) => {
    return (
        <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank {type} {number}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
        </div>
    );
};

export default Account;