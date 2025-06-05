import interceptor from '../utlis/interceptor';

/**
 * Fetch skips by location
 * @param {string} postcode
 * @param {string} area
 * @returns {Promise}
 */
export const getSkipsByLocation = (postcode = 'NR32', area = 'Lowestoft') => {
  return interceptor.get(`/skips/by-location`, {
    params: { postcode, area },
  });
};
