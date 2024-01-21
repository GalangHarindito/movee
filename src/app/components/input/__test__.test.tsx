import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import SearchInput from "./search";

describe("Search Input Test Component", () => {
  const onchange = jest.fn();
  it("renders search input layout unchanged", () => {
    const { container } = render(
      <SearchInput placeHolder="placeholder" onChange={onchange} />
    );
    expect(container).toMatchSnapshot();
  });

  it("search input should type text", () => {
    const placeholder = 'placeholder'
    const setup = () => {
      const utils = render(
        <SearchInput placeHolder={placeholder} onChange={onchange} />
      );
      const input = screen.getByDisplayValue('');
      const placeholderText = screen.getByPlaceholderText(placeholder)
      return {
        input,
        placeholderText,
        ...utils
      };
    };

    const { input, placeholderText } = setup();
    expect(placeholderText).toHaveAttribute("placeholder", "placeholder")
    fireEvent.change(input, { target: { value: "Die Hard" } });
  });
});
