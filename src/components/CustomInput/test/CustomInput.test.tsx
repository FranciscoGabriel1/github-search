import { render, screen, fireEvent } from "@testing-library/react";
import CustomInput from "..";
import "@testing-library/jest-dom";

describe("CustomInput", () => {
  it("renderiza o campo de entrada com o rótulo correto", () => {
    render(<CustomInput label="Test Label" value="" onChange={() => {}} />);
    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toBeInTheDocument();
  });

  it("exibe o valor inicial correto", () => {
    render(
      <CustomInput
        label="Label de teste"
        value="Valor inicial"
        onChange={() => {}}
      />
    );
    const inputElement = screen.getByLabelText(
      "Label de teste"
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("Valor inicial");
  });

  it("chama a função onChange com o novo valor quando alterado", () => {
    const handleChange = jest.fn();
    render(
      <CustomInput label="Label de teste" value="" onChange={handleChange} />
    );
    const inputElement = screen.getByLabelText(
      "Label de teste"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Novo valor" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("Novo valor");
  });
});
