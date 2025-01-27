import './App.scss';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <>
      <Banner />
      <Header />
    </>
  );
};
