import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import CustomModal from "..";

describe("Testes do Componente CustomModal", () => {
  const title = "Título de Teste";
  const content = <div>Conteúdo de Teste</div>;

  it("renderiza o modal quando open é verdadeiro", () => {
    render(<CustomModal title={title} children={content} open={true} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("não renderiza o modal quando open é falso", () => {
    render(<CustomModal title={title} children={content} open={false} />);
    expect(screen.queryByText(title)).not.toBeInTheDocument();
  });

  it("exibe o título corretamente", () => {
    render(<CustomModal title={title} children={content} open={true} />);
    expect(screen.getByText(title)).toHaveStyle({ fontWeight: "700" });
  });

  it("renderiza o conteúdo dos children corretamente", () => {
    render(<CustomModal title={title} children={content} open={true} />);
    expect(screen.getByText("Conteúdo de Teste")).toBeInTheDocument();
  });
});
