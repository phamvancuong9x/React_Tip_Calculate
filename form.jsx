// import React from "react";

const H1Title = (props) => {
  return <h1>{props.content}</h1>;
};
const Input = ({ classIcon, ...Input }) => {
  return (
    <div className="input">
      <span className="icon">
        <i className={classIcon}></i>
      </span>
      <input {...Input} />
    </div>
  );
};

const FormField = (props) => {
  return (
    <div className="input-group">
      <label htmlFor={props.id}>{props.label}</label>
      {props.children}
    </div>
  );
};

const Option = (props) => {
  return <option>{props.textContent}</option>;
};
const Button = (props) => {
  return <button className="">{props.name}</button>;
};
const Select = (props) => {
  return (
    <React.Fragment>
      <p className="select-title">Service quality</p>
      <select>{props.children}</select>
    </React.Fragment>
  );
};
const Result = () => {
  return (
    <React.Fragment>
      <div className="result">
        Tip
        <span className="number-money">$12</span>
        each person
      </div>
      <Button name="Calculate" />
    </React.Fragment>
  );
};
function App() {
  return (
    <div className="container">
      <form>
        <H1Title content="Tip Calculator" />
        <FormField label="Bill amount" id="bill-amount">
          <Input
            type="text"
            classIcon="fa-solid fa-money-bill"
            id="bill-amount"
          />
        </FormField>
        <FormField label="Number of guests" id="number-guest">
          <Input type="text" classIcon="fa-solid fa-users" id="number-guest" />
        </FormField>
        <Select>
          <Option textContent="choose..." />
          <Option textContent="30% - Outstanding" />
          <Option textContent="20% - Good" />
          <Option textContent="15% - It's OK" />
          <Option textContent="5% - Terrible" />
        </Select>
      </form>
      <Result />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
