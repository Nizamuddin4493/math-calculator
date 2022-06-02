import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Header from '../components/Header';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><Header /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
