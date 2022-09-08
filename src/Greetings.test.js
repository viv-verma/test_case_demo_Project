import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";


describe('group all tests in a suite', () => {
    
    test('render greeting component', () => {
        render(<Greetings />);
        const textElem = screen.getByText(/Hello World/i);
        expect(textElem).toBeInTheDocument();
    })

    test("renders It's good to see you if button was not clicked", () => {
        render(<Greetings />);
        const outputElement = screen.getByText("It's good to see you", {exact: false});
        expect(outputElement).toBeInTheDocument();
    });


    test("renders 'Changed' if button was not clicked", () => {
        render(<Greetings />);

        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement);

        const outputElement = screen.getByText('Changed', {exact: false})
        expect(outputElement).toBeInTheDocument();
    })

    test("dont renders 'good to see you' if button was clicked", () => {
        render(<Greetings />);

        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement);

        const outputElement = screen.queryByText('good to see you', {exact: false})
        // expect(outputElement).not.toBeInTheDocument();
        expect(outputElement).toBeNull()
    })
})
