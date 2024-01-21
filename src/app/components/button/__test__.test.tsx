import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe('Button Test Component', () => {
    const onClick = jest.fn()
    it('renders button layout unchanged ', () => {

        const props = {
            label: 'Submit',
            onClick: onClick,
            buttonStyle: 'primary',
        }
        const { container } = render(
            <Button {...props} />
        );
        expect(container).toMatchSnapshot();
    })
})