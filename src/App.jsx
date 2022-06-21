// Components
import Header from "./components/Header";
import Albums from "./components/Albums";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
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
        <Footer />
      </ItunesProvider>
    </>
  );
}

export default App;
