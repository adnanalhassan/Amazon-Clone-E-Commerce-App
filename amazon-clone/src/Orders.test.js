import Orders from "./Orders";
import { shallow } from "enzyme";

describe(Orders, () => {
    it("renders the orders correctly", () => {
        const wrapper = shallow(<Orders />);
        expect(wrapper).toMatchSnapshot();
    });
});