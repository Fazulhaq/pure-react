const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React IS rendered"),
    React.createElement(Person, { name: "Ahmad", occupation: "Teacher" }, null),
    React.createElement(
      Person,
      { name: "Mahmood", occupation: "Carpenter" },
      null
    ),
    React.createElement(
      Person,
      { name: "Hassan", occupation: "Engineer" },
      null
    ),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
