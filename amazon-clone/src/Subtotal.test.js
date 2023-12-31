import Subtotal from "./Subtotal";
import { shallow } from "enzyme";
import { render, fireEvent } from '@testing-library/react';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { MemoryRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(Subtotal, () => {
    it("renders the subtotal correctly", () => {
        const wrapper = shallow(<Subtotal />);
        expect(wrapper).toMatchSnapshot();
    });

    it("renders the correct number of items in the basket", () => {
        const [{ basket }, dispatch] = useStateValue();
        const wrapper = shallow(<Subtotal />);
        expect(wrapper.find('p').text()).toContain(`Subtotal (${basket.length} items)`);
    });

    it("renders the correct total price", () => {
        const [{ basket }, dispatch] = useStateValue();
        const wrapper = shallow(<Subtotal />);
        expect(wrapper.find('CurrencyFormat').prop('value')).toBe(getBasketTotal(basket));
    });

    it("redirects to the checkout page when the 'Proceed to Checkout' button is clicked", () => {
        const { getByText } = render(
            <MemoryRouter>
                <Subtotal />
            </MemoryRouter>
        );

        const button = getByText('Proceed to Checkout');
        fireEvent.click(button);

        expect(window.location.pathname).toBe('/payment');
    });
});