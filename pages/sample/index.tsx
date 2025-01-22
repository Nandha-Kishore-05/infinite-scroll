import { useEffect, useState } from 'react';
import Card from './components/card';
import { useDummyStore } from './store/dummystore';

const Home = () => {
  const { data, fetchDummyData } = useDummyStore();
  const [count, setCount] = useState(5);

  const loadMoreData = async () => {
    await fetchDummyData(count);
  };

  useEffect(() => {
    loadMoreData();
  }, [count]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
    ) {
      setCount((prev) => prev + 5);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Infinite Scroll with Zustand</h1>
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
      <style jsx>{`
        .card-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 16px;
        }
        h1 {
          text-align: center;
          margin: 16px 0;
        }
      `}</style>
    </div>
  );
};

export default Home;
