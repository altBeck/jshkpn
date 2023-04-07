import React from 'react';
import './liqwid.css';

const Liqwid = () => {
  return (
    <div className="liqwid--container">
      <div className="space--liqwid">
        <a className="home--link" href="/">HOME</a>
      
        <div className="space--liqwid-content">

          <p>
          Liqwid is a non-custodial money market protocol for lenders and borrowers. Think Aave liquidity markets plus Lido liquid staking (for the Cardano market). Users participate in the protocol as lenders or borrowers. Lenders supply liquidity to a market to earn interest on deposits, borrowers are able to open perpetual loans in an overcollateralized manner. Loans accrue a variable rate of interest based on a market's interest rate parameters and the current market utilization (ratio of borrow demand to supply for a given asset).
          </p>

        </div>
      </div>
    </div>
  )
}

export default Liqwid