import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
   fetch('http://myapp-alb-84648660.us-east-2.elb.amazonaws.com/api/hello')
 // <--- Updated to full IP path
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Failed to fetch'));
  }, []);

  return <h1>{msg || 'Loading...'}</h1>;
}

export default App;
