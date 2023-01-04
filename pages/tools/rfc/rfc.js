import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Header from './components/Header';

import {
  ADULT_ACT_LVL,
  ADULT_BARF_PERC,
  PUPPY_BARF_PERC,
  PUPPY_ACT_LVL,
  PUPPY_SIZES,
} from './data';

const roundPercCalc = (num, perc) => {
  return ((perc / 100) * num).toFixed(2);
};

const getResultList = (data, dfe) => {
  let resultList = [];
  for (const [key, value] of Object.entries(data)) {
    resultList.push([key, value, roundPercCalc(dfe, value)]);
  }
  return resultList;
};
const PuppySizeTable = (props) => {
  let tHead = [
    <th>Size</th>,
    <th>Description</th>,
    <th>Weight</th>,
    <th>EAW*</th>,
  ];
  let tBody = [];

  for (const [sizeName, size] of Object.entries(props.data)) {
    tBody.push(
      <tr>
        <th col="2">{sizeName}</th>
        <td>{size.description}</td>
        <td>{size.weight}</td>
        <td>{size.eaw}</td>
      </tr>
    );
  }
  return (
    <Table variant="striped">
      <thead>
        <tr>{tHead}</tr>
      </thead>
      <tbody>{tBody}</tbody>
    </Table>
  );
};
const AdultActivityTable = (props) => {
  let tHead = [
    <thead>
      <tr>
        <th>Activity Level</th>
        <th>Energy Needs</th>
      </tr>
    </thead>,
  ];
  let tBody = [];
  props.data.map((row) => {
    tBody.push(
      <tr>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
      </tr>
    );
  });
  return (
    <Table>
      {tHead}
      <tbody>{tBody}</tbody>
    </Table>
  );
};
const PuppyActivityTable = (props) => {
  let tHead = (
    <thead className="text-center">
      <tr>
        <th className="border-end" colSpan={2}>
          SML{' & '}MED
        </th>

        <th colSpan={2}>MED/LRG{' & '}LRG</th>
      </tr>
      <tr>
        <th>Age</th>
        <th className="border-end">Energy Needs</th>
        <th>Age</th>
        <th>Energy Needs</th>
      </tr>
    </thead>
  );
  let tBody = [];
  props.data.map((row) => {
    tBody.push(
      <tr className="text-center">
        <td>{row[0]}</td>
        <td className="border-end">{row[1]}</td>
        <td>{row[2]}</td>
        <td>{row[3]}</td>
      </tr>
    );
  });

  return (
    <Table borderless>
      {tHead}
      <tbody>{tBody}</tbody>
    </Table>
  );
};
const BarfTableNeeds = () => {
  const puppySizes = PUPPY_SIZES;
  const puppyActLvl = PUPPY_ACT_LVL;
  const adultActLvl = ADULT_ACT_LVL;
  return (
    <Accordion flush className="my-5">
      <h3> Energy Needs Tables </h3>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h4>Puppy</h4>
        </Accordion.Header>
        <Accordion.Body>
          <p className="lead">
            First identify your dog breed size from the table below.
          </p>
          <PuppySizeTable data={puppySizes} />
          <p>
            <i>*Estimated Adult Weight</i>
          </p>
          <p className="lead">And match it with the following table.</p>
          <PuppyActivityTable data={puppyActLvl} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h4>Adult</h4>
        </Accordion.Header>
        <Accordion.Body>
          <AdultActivityTable data={adultActLvl} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
const BarfResults = (props) => {
  return (
    <div id="result" className="my-5">
      <h2 className="my-2">
        <strong>Daily Food Volume Estimate:</strong>
      </h2>
      <BarfResultsData data={props.data} />
      <h3 className="dfe-total fw-bold">Total: {props.calc}g</h3>
    </div>
  );
};
const BarfResultsData = (props) => {
  const data = props.data;
  const tHeader = (
    <tr>
      <th>Description</th>
      <th>Perc. %</th>
      <th>Amount g.</th>
    </tr>
  );

  const tbody = data.map((ingredient) => {
    return (
      <tr>
        <th>{ingredient[0]}</th>
        <td>{ingredient[1]}%</td>
        <td>{ingredient[2]} g.</td>
      </tr>
    );
  });
  return (
    <Table flush hover className="my-5">
      <thead>
        {tHeader}
      </thead>
      <tbody>{tbody}</tbody>
    </Table>
  );
};

const InputDog = (props) => {
  return (
    <Form id="rfcForm" onSubmit={props.handleSubmit}>
      <Form.Group>
        <FloatingLabel
          className="mb-3"
          controlId="weightControl"
          label="Weight"
        >
          <Form.Control
            type="text"
            value={props.values.weight}
            onChange={props.handleWeightChange}
            placeholder=""
          />
        </FloatingLabel>
        <FloatingLabel controlId="eNeedsControl" label="Energy Needs">
          <Form.Control
            type="text"
            value={props.values.energyNeeds}
            onChange={props.handleEnergyNeedsChange}
            placeholder=""
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="d-flex mt-3 ms-3" style={{ height: '40px' }}>
        <Form.Label className="d-inline-flex">
          Puppy
          <Form.Check
            className="mx-3"
            type="checkbox"
            checked={props.values.isPuppy}
            onChange={props.handleAgeChange}
          />
        </Form.Label>
      </Form.Group>
    </Form>
  );
};

class RFC extends React.Component {
  // spostare calcoli dalla classe magari a funzioni singole
  // e spostare weight/energy needs ad InputDog
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      energyNeeds: '',
      isPuppy: false,
    };
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleEnergyNeedsChange = this.handleEnergyNeedsChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleWeightChange(e) {
    this.setState({ weight: e.target.value });
  }
  handleAgeChange(e) {
    this.setState({ isPuppy: e.target.checked });
  }
  handleEnergyNeedsChange(e) {
    this.setState({ energyNeeds: e.target.value });
  }

  handleSubmit(e) {
    console.log(e.target);
  }
  _rer() {
    return 70 * this.state.weight ** 0.75;
  }
  _der() {
    return this._rer() * this.state.energyNeeds;
  }
  _dfe() {
    return (this._der() / 1000) * 538;
  }
  render() {
    const barfPercTable = this.state.isPuppy
      ? PUPPY_BARF_PERC
      : ADULT_BARF_PERC;
    const calc = this._dfe().toFixed(2);
    const barfResults = getResultList(barfPercTable, calc);

    return (
      <Container
        id="rfc"
        className="mt-5 d-infline-flex justify-content-center align-items-center "
        fluid
      >
        <Header />
        <div className="my-5">
          <InputDog
            values={this.state}
            handleWeightChange={this.handleWeightChange}
            handleEnergyNeedsChange={this.handleEnergyNeedsChange}
            handleAgeChange={this.handleAgeChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <BarfResults data={barfResults} calc={calc} />
        <BarfTableNeeds />
      </Container>
    );
  }
}
export default RFC;
