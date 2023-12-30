import Header from "./Header";
import { shallow, render } from "enzyme";
import { Link } from "react-router-dom";

describe(Header, () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Header />, div);
    });

    it("renders the header correctly", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it("redirects to the homepage when the Amazon logo is clicked", () => {
        const wrapper = shallow(<Header />);
        wrapper.find(".header__logo").simulate("click");
        expect(wrapper.find(Link).prop("to")).toBe("/");
    });

    it("redirects to the login page when the 'Sign In' button is clicked", () => {
        const wrapper = shallow(<Header />);
        wrapper.find(".header__option").simulate("click");
        expect(wrapper.find(Link).prop("to")).toBe("/login");
    });

    it("redirects to the orders page when the 'Orders' button is clicked", () => {
        const wrapper = shallow(<Header />);
        wrapper.find(".header__option").simulate("click");
        expect(wrapper.find(Link).prop("to")).toBe("/orders");
    });

    it("redirects to the basket page when the basket icon is clicked", () => {
        const wrapper = shallow(<Header />);
        wrapper.find(".header__option").simulate("click");
        expect(wrapper.find(Link).prop("to")).toBe("/checkout");
    });
})