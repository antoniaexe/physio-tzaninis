import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Header } from './Header';

const Base = ({ children }: any) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    {children}
    <Footer />
  </div>
);

export { Base };
