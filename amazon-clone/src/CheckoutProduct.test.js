import CheckoutProduct from "./CheckoutProduct";
import { shallow } from "enzyme";

describe(CheckoutProduct, () => {
    it("renders the basket product correctly", () => {
        const wrapper = shallow(<CheckoutProduct />);
        expect(wrapper).toMatchSnapshot();
    });

    it("calls the removeFromBasket function when the 'Remove From Basket' button is clicked", () => {
        const mockRemoveFromBasket = jest.fn();
        const wrapper = shallow(<CheckoutProduct removeFromBasket={mockRemoveFromBasket} />);
        wrapper.find('button').simulate('click');
        expect(mockRemoveFromBasket).toHaveBeenCalled();
    });
});