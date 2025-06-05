import Herosec from '../components/Herosec';
import { yardImages } from '../utlis/constants';
import React, { useEffect, useState } from 'react';
import { getSkipsByLocation } from '../api/yardSkips'

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
        <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>
      ) : yardSkips.length > 0 ? (
        <Herosec yardSkips={yardSkips} />
      ) : (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No skips found.</p>
      )}
    </div>
  );
};

export default HomePage;
