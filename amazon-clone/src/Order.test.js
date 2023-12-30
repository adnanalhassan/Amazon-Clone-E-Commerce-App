import Order from "./Order";
import { shallow, mount } from "enzyme";

describe(Order, () => {
    it("renders the order correctly", () => {
        const wrapper = shallow(<Order />);
        expect(wrapper).toMatchSnapshot();
    });
});