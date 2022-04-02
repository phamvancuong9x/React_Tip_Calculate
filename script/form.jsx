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
function App() {
  return (
    <form className="container">
      <h1>Tip Calculator</h1>
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
      <p className="select-title">Service quality</p>
      <select>
        <Option textContent="choose..." />
        <Option textContent="30% - Outstanding" />
        <Option textContent="20% - Good" />
        <Option textContent="15% - It's OK" />
        <Option textContent="5% - Terrible" />
      </select>
      <div className="result">
        Tip
        <span className="number-money">$12</span>
        each person
      </div>
      <Button name="Calculate" />
    </form>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
