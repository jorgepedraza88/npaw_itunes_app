// Components
import Header from "./components/Header";
import Albums from "./components/Albums";
import Hero from "./components/Hero";
// Context
import { ItunesProvider } from "./context/ItunesProvider";
// Material UI
import { Container } from "@mui/system";

function App() {
  return (
    <>
      <ItunesProvider>
        <Header />
        <Hero />
        <Container maxWidth="xl">
        <Albums />
        </Container>
      </ItunesProvider>
    </>
  );
}

export default App;
