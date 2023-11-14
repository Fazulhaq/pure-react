const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 1 }, props.name),
    React.createElement("p", { key: 2 }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { className: "title", key: 1 },
      "React IS rendered"
    ),
    React.createElement(
      Person,
      { name: "Ahmad", occupation: "Teacher", key: 2 },
      null
    ),
    React.createElement(
      Person,
      { name: "Mahmood", occupation: "Carpenter", key: 3 },
      null
    ),
    React.createElement(
      Person,
      { name: "Hassan", occupation: "Engineer", key: 4 },
      null
    ),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
