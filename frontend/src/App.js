import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
  fetch('http://13.58.228.176:3001/api/hello') // backend's public IP

 // <--- Updated to full IP path
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Failed to fetch'));
  }, []);

  return <h1>{msg || 'Loading...'}</h1>;
}

export default App;
