import Checkout from "./Checkout";
import { shallow } from "enzyme";import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(Checkout, () => {
    it("renders the basket page correctly", () => {
        const wrapper = shallow(<Checkout />);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders the user's email on the basket page", () => {
        const mockUser = { email: "user@example.com" };
        const wrapper = shallow(<Checkout user={mockUser} />);
        expect(wrapper.text()).toContain(mockUser.email);
    });
});