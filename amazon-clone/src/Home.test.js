import Home from "./Home";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(Home, () => {
     it("renders the home page correctly", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
     });
});