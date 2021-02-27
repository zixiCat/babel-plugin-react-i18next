// import React from 'react';
// import { Trans } from 'react-i18next';
// import './app.css';

// const App = () => {
//   return (
//     <div>
//       <Trans>What a save!</Trans>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './app.css';

const a: string = '12';

const App = () => {
  return (
    <div>
      <div>{a === '12' ? <div>ta1-s1</div> : 'ds'}</div>
      {/* <div>{a === '12' ? 'ta1-s1' : 'ds'}</div> */}
      {/* <div>{i18next.t(a && 'ta1-s')}</div> */}
    </div>
  );
};

export default App;
