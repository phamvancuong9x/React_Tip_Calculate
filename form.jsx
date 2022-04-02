const H1Title = (props) => {
  return <h1>{props.content}</h1>;
};
const Input = (props) => {
  return (
    <div className="input-group">
      <label htmlFor={props.id}>{props.titleInput}</label>
      <div className="input">
        <span className="icon">
          <i className={props.classIcon}></i>
        </span>
        <input
          type={props.type}
          placeholders={props.placeholders}
          id={props.id}
        />
      </div>
    </div>
  );
};

const Option = (props) => {
  return <option>{props.textContent}</option>;
};
const Button = (props) => {
  return <button className="">{props.name}</button>;
};
const Select = () => {
  return (
    <React.Fragment>
      <p className="select-title">Service quality</p>
      <select>
        <Option textContent="choose..." />
        <Option textContent="30% - Outstanding" />
        <Option textContent="20% - Good" />
        <Option textContent="15% - It's OK" />
        <Option textContent="5% - Terrible" />
      </select>
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
    <form className="container">
      <H1Title content="Tip Calculator" />
      <Input
        id="bill-amount"
        type="text"
        titleInput="Bill amount"
        classIcon="fa-solid fa-money-bill"
      />
      <Input
        id="number-guest"
        type="text"
        titleInput="Number of guests"
        classIcon="fa-solid fa-users"
      />
      <Select />
      <Result />
    </form>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
