import './App.scss';
import { Banner } from './components/Banner/Banner';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProducstLists/ProducstLists';

export const App: React.FC = () => {
  return (
    <>
      <Banner />
      <Header />
      <ProductsList />
    </>
  );
};
