import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Footer from '../components/Footer';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><Footer /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
