import Dashboard from "./Dashboard";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/index";

describe("Dashboard component - submit", () => {
  test("renders name, device and disabled form", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    const textbox = screen.getAllByRole("textbox");
    const checkbox = screen.getAllByRole("checkbox");
    expect(textbox).toHaveLength(2);
    expect(checkbox).toHaveLength(1);
  });

  test("should add name to 'post new device'", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    const nameLabelElement = screen.getByLabelText("Name");
    fireEvent.change(nameLabelElement, { target: { value: "name!" } });
    expect(nameLabelElement.value).toBe("name!");
  });

  test("should submit is disabled'", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeDisabled();
  });

  test("should submit works'", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeDisabled();
    const nameLabelElement = screen.getByLabelText("Name");
    fireEvent.change(nameLabelElement, { target: { value: "name!" } });
    expect(submitButton).not.toBeDisabled();
  });
});
