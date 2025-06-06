import '../styles/homepage.css';
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
    <div className="homepage-container">
      {loading ? (
        <div className="loader-wrapper">
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
        <p className="no-skips-message">No skips found.</p>
      )}
    </div>
  );
};

export default HomePage;
