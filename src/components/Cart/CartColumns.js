import React from 'react';

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-large d-lg-block flexItem">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-uppercase">products</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-uppercase">name of product</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-uppercase">price</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-uppercase">quantity</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-uppercase">remove</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-uppercase">total</span>
            </div>
        </div>
    </div>
  )
}
