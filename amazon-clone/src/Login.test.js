import { render, fireEvent, waitFor } from '@testing-library/react';
import shallow from "enzyme";
import { ReactDOM } from 'react-dom';
import Login from './Login';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// Mock Firebase signInWithEmailAndPassword
jest.mock('./firebase', () => ({
  auth: {
    signInWithEmailAndPassword: jest.fn(),
  },
}));

describe(Login, () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Login />, div);
    });
    
    it("renders the login page correctly", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });

  it('calls the signIn function with true on successful login', async () => {
    const signInMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Login signIn={signInMock} />);

    // Mock a successful authentication
    auth.signInWithEmailAndPassword.mockResolvedValueOnce({});

    // Fill in the form with valid credentials
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });

    // Click the login button
    fireEvent.click(getByText('Sign In'));

    // Wait for the asynchronous authentication process to complete
    await waitFor(() => {
      // Assert that signIn was called
      expect(signInMock).toHaveBeenCalledWith(true);
    });
  });

  it('calls the signIn function with false on unsuccessful login', async () => {
    const signInMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Login signIn={signInMock} />);

    // Mock an unsuccessful authentication
    auth.signInWithEmailAndPassword.mockRejectedValueOnce(new Error('Invalid credentials'));

    // Fill in the form with invalid credentials
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'invalid@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'invalid' } });

    // Click the login button
    fireEvent.click(getByText('Sign In'));

    // Wait for the asynchronous authentication process to complete
    await waitFor(() => {
      // Assert that onLogin was called with false
      expect(signInMock).toHaveBeenCalledWith(false);
    });
  });
});
