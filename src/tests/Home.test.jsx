import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><Home /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
