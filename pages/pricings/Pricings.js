import React from 'react';
import Container from 'react-bootstrap/Container';

import iconLib from '../../utils/fontawesome/icons';

const logo = iconLib.logo;
const iconCommons = iconLib.commons;

const Pricings = (props) => {
  const heroTitle = 'Pet Sitter v0.0.1';
  const subTitle =
    'Culpa flank officia, in hamburger ball tip ullamco lorem boudin tri-tip ut eu irure.';

  return (
    <>
      <Container>
        <span class="anchor" id={props.id}></span>
        <h2 className="pb-5 fw-bold display-2 text-center">Pricing</h2>
        <div className="text-center">
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div id="petSittingMore" className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pet Sitting</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $60<small className="text-muted fw-light">/night</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-success"
                  >
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">House Visit</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $25<small className="text-muted fw-light">/hour</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-success"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-warning">
                <div className="card-header py-3 text-white bg-warning border-warning">
                  <h4 className="my-0 fw-normal text-dark">Pet Walking</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">
                    $30<small className="text-muted fw-light">/hour</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-success"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="display-6 text-center mb-4">Extras Included</h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}></th>
                  <th style={{ width: '23%' }}>Pet Sitting</th>
                  <th style={{ width: '23%' }}>House Visit</th>
                  <th style={{ width: '23%' }}>Pet Walking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Public
                  </th>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Private
                  </th>
                  <td></td>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Permissions
                  </th>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Sharing
                  </th>
                  <td></td>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Unlimited members
                  </th>
                  <td></td>
                  <td>{iconCommons.check}</td>
                  <td>{iconCommons.check}</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Extra security
                  </th>
                  <td></td>
                  <td></td>
                  <td>{iconCommons.check}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Pricings;
