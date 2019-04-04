import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'ignore-styles';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM();
global.window = window;
global.shallow = shallow;

configure({ adapter: new Adapter() });
