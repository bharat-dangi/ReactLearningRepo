import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ToDoContext } from "./context/ToDoContext";
import todoReducer from "./context/reducer";
import ToDoForm from "./Components/ToDoForm";
import Todos from "./Components/ToDos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <ToDoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>ToDO App with Context API</h1>
        <Todos/>
        <ToDoForm />
      </Container>
    </ToDoContext.Provider>
  );
};

export default App;
