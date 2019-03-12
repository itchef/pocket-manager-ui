import React from 'react';
import ReactDOM from 'react-dom';
import PocketManager from '../../src/components/pocket-manager/PocketManager';

describe('PocketManager', function () {
  it('should render PocketManager App', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PocketManager />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
