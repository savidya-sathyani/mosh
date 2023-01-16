import { render, screen } from "@testing-library/react";
import LinkButton from "../index";
import { WithTheme } from "../../../tests/utils/mockComponent";

const btnProps = {
  label: "Test Button",
  mode: "Primary",
  link: "https://www.testlink.com",
  onClick: () => {},
};

describe("LinkButton Component", () => {
  it("should render a button with the label passed as props", () => {
    render(
      <WithTheme theme={"light"}>
        <LinkButton label={btnProps.label} link={btnProps.link} />
      </WithTheme>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
