import "./App.css";
import { StyledHeader1 } from "./styled";
import Container from "./Container";
import Form from "./Form";
import Timer from "./Timer";

function App() {

  return (
    <Container>
      <Timer />
      <StyledHeader1>Kantor walut w React</StyledHeader1>
      <Form />
    </Container>
  );
}

export default App;
