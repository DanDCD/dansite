import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const resp = await fetch(`/api/trigger`);
      const resp_body = await resp.text();
      setData(resp_body);
    })();
  });

  return <div>{data}</div>;
}

export default App;