import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      {/* <h2>Overview</h2> */}
      <div className="cards">
        <div className="card">
          <div className='card_name'>
            <div>Hoken Balance</div>
            <div>icon</div>
          </div>
          <div className='card_money'>$56,674</div>
          <div className='card_bottum'>
            <div className='cord_bottum_title'>
              <div>Upcoming Balance : 200</div>
              <div>Available Balance : 100</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className='card_name'>
            <div>Hoken Balance</div>
            <div>icon</div>
          </div>
          <div className='card_money'>$56,674</div>
          <div className='card_bottum'>
            <div className='cord_bottum_title'>
              <div>Upcoming Balance : 200</div>
              <div>Available Balance : 100</div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className='card_name'>
            <div>Hoken Balance</div>
            <div>icon</div>
          </div>
          <div className='card_money'>$56,674</div>
          <div className='card_bottum'>
            <div className='cord_bottum_title'>
              <div>Upcoming Balance : 200</div>
              <div>Available Balance : 100</div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className='card_name'>
            <div>Hoken Balance</div>
            <div>icon</div>
          </div>
          <div className='card_money'>$56,674</div>
          <div className='card_bottum'>
            <div className='cord_bottum_title'>
              <div>Upcoming Balance : 200</div>
              <div>Available Balance : 100</div>
            </div>
          </div>
        </div>
        {/* <div className="card">Hash Unit: $56,674</div>
        <div className="card">Current Rank: $56,674</div>
        <div className="card">Self Package: $56,674</div> */}
      </div>
    </div>
  );
};

export default Overview;
