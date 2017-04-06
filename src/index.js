import React from 'react';
import ReactDOM from 'react-dom';
import DataBox from './DataBox';
import './style';

ReactDOM.render(
  <DataBox
    urls={['http://localhost:3001/scraper/crime','http://localhost:3001/scraper/crime','http://localhost:3001/scraper/crime']}
    pollInterval={2000}
  />,
  document.getElementById('root')
);
