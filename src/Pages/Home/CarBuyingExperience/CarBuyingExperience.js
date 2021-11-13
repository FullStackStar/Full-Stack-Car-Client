import React from 'react';

const CarBuyingExperience = () => {
    return (
        <div style={{ marginTop: '60px', marginBottom: '60px' }}>
            <h2>Control Your Car-Buying Experience</h2>
            <p>At CarSales, you're in charge of the process from start to finish. Here's how.</p>
            <div className="row d-flex align-items-center">
                <div className="col-5 mx-auto">
                    <img src="https://consumer.tcimg.net/assets/21-11/module-1-img-eb61fa2b3227fb090f6065132ff221bb.svg" alt="" />
                </div>
                <div className="col-5 mx-auto text-start">
                    <h3>Build Your Deal With Confidence</h3>
                    <p>Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.</p>
                    <button className="mt-3 btn app-main-btn text-white rounded-pill">Shop New cars</button>
                </div>
            </div>
        </div>
    );
};

export default CarBuyingExperience;