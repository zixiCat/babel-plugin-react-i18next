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
// import { Trans } from 'react-i18next';
import i18next from 'i18next';
import './app.css';

const a: string = '12';

const App = () => {
  return (
    <div>
      <div>{i18next.t(a === '12' ? i18next.t('ta1-s') : 'ds')}</div>
    </div>
  );
};

export default App;
