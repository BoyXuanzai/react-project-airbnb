import React, { memo } from 'react';
// eslint-disable-next-line no-unused-vars
import HelloWorld from 'components/helloWorld';

const App = memo(() => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
});

export default App;
