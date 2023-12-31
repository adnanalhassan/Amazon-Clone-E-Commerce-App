import Product from "./Product";
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(Product, () => {
     it("renders the products correctly", () => {
        const wrapper = shallow(<Product />);
        expect(wrapper).toMatchSnapshot();
     });

     it("should call the addToBasket function when the 'add to basket' button is clicked", () => {
        const mockAddToBasket = jest.fn();
        const wrapper = shallow(
          <Product id={id} title={title} price={price} image={image} addToBasket={mockAddToBasket} rating={rating} />
        );

        wrapper.find('button').simulate("click");
        expect(mockAddToBasket).toHaveBeenCalledWith({
         id: id, 
         title: title, 
         price: price, 
         image: image, 
         rating: rating,
      });
     });
});