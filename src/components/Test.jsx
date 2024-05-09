import React, { useState } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const Test = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div>
      <CountryDropdown classes=''
        value={country}
        onChange={(val) => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)} />
    </div>
  );
}

export default Test;