import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importing components
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

//redux
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <ToDo />
        <ToDoForm />
      </Container>
    </Provider>
  );
}

export default App;
