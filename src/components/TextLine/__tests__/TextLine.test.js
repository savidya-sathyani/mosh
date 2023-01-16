import { render, screen } from "@testing-library/react";
import TextLine from "../TextLine";
import { WithTheme } from "../../../tests/utils/mockComponent";

const btnProps = {
  text: "Test label",
};

describe("LinkButton Component", () => {
  it("should render a button with the label passed as props", () => {
    render(
      <WithTheme theme={"light"}>
        <TextLine label={btnProps.text} />
      </WithTheme>
    );
    const element = screen.getByRole("img");
    expect(element).toBeInTheDocument();
  });
});
