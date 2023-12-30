import Home from "./Home";
import { shallow } from "enzyme";

describe(Home, () => {
     it("renders the home page correctly", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
     });
});