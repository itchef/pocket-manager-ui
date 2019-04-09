import { configure, shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import 'ignore-styles';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM();
global.window = window;
global.shallow = shallow;

configure({ adapter: new Adapter() });
