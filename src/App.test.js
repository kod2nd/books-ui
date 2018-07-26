import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow'


it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App should match snapshot', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  // console.log(output)
  expect(output).toMatchSnapshot()
});
