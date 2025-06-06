import { SyncLoader } from "react-spinners";
import { yardImages } from '../utlis/constants';
import React, { useEffect, useState } from 'react';
import { getSkipsByLocation } from '../api/yardSkips'
import ProductDetail from '../components/ProductDetail';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [yardSkips, setYardSkips] = useState([]);

  const location = { postcode: 'NR32', area: 'Lowestoft' };

  const fetchSkipYards = async () => {
    try {
      const result = await getSkipsByLocation(location.postcode, location.area);
      const processedData = result.data.map((item, index) => ({
        ...item,
        image: yardImages?.[index] || null,
      }));
      setYardSkips(processedData);
    } catch (error) {
      console.error("Failed to fetch skips:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!yardSkips.length) fetchSkipYards();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <SyncLoader
            color={'#286da6'}
            loading={true}
            data-testid="loader"
            aria-label="Loading Spinner"
          />
        </div>
      ) : yardSkips.length > 0 ? (
        <ProductDetail yardSkips={yardSkips} />
      ) : (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No skips found.</p>
      )}
    </div>

  );
};

export default HomePage;
