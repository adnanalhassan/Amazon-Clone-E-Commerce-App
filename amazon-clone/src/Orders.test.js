import Orders from "./Orders";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(Orders, () => {
    it("renders the orders correctly", () => {
        const wrapper = shallow(<Orders />);
        expect(wrapper).toMatchSnapshot();
    });
});