
import { Provider } from "react-redux";
import store from "./store";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
        <Container maxW="container.lg" centerContent>
          
          <Heading as="h1" size="xl">SNAKE GAME</Heading>
          <CanvasBoard height={600} width={1000} /> 
        </Container>
      </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
