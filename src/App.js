import './App.css';
import Random from './components/random/Random';
import Search from './components/search/Search';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Layout>
      <div className='main'>
        <div className='search-cointainer'>
          <Search />
          <Random />
        </div>
      </div>
    </Layout>
  );
}

export default App;
