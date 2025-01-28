import './App.scss';
import { Banner } from './components/Banner/Banner';
import { GridsBanner } from './components/GridsBanner/GridsBanner';

import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProducstLists/ProducstLists';
import { ProductCart } from './components/ProductCart/ProductCart';
import { ProductFeature } from './components/ProductFeatures/ProductFeatures';

export const App: React.FC = () => {
  return (
    <>
      <Banner />
      <Header />
      <ProductsList />
      <GridsBanner />
      <ProductCart />
      <ProductFeature />
    </>
  );
};
