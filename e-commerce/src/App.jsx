import './App.css';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import Router from './routes/Router';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
