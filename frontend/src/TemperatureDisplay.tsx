import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemperatureDisplay: React.FC = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await axios.get('https://wie-warm-ist-das-wasser.inuthebot.duckdns.org/get_temperature');
        setTemperature(response.data.temperature);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    fetchTemperature();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Temperature Display</h1>
      <div className="text-4xl font-bold mb-4 text-blue-500">{temperature !== null ? `${temperature}°C` : 'Loading...'}</div>
      <p className="text-lg text-gray-600">Current Temperature</p>
    </div>
  );
};

export default TemperatureDisplay;
