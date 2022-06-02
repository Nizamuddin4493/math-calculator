import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><Quote /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
