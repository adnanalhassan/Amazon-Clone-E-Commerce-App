import Payment from "./Payment";
import { shallow } from "enzyme";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(Payment, () => {
    it("renders the checkout page correctly", () => {
        const wrapper = shallow(<Payment />);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders the correct number of items", () => {
        const [{ basket }, dispatch] = useStateValue();
        const wrapper = shallow(<Payment />);
        expect(wrapper.find('h1').text()).toContain(`Checkout (${basket.length} items)`);
    });

    it("renders the user's email inside the delivery address", () => {
        const [{ user }, dispatch] = useStateValue();
        const wrapper = shallow(<Payment />);
        expect(wrapper.find('p').text()).toContain(user?.email);
    });

    it("redirects to the basket page when the 'number of items' link is clicked", () => {
        const [{ basket }, dispatch] = useStateValue();
        const wrapper = shallow(<Payment />);
        wrapper.find('Link').simulate('click');
        expect(wrapper.find('Link').prop('to')).toBe('/checkout');
    })
});