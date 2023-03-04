import Button from "@/components/Button";
import { MagnifyingGlass } from "phosphor-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section>
        <h1 className="text-center text-primary uppercase">
          Cuide Bem de Você
        </h1>

        <h4 className="text-center max-w-3xl mx-auto">
          Os melhores conteúdos sobre saúde e bem-estar de forma rápida, segura
          e confiável.
        </h4>

        <form className="flex justify-center gap-1">
          <div className="rounded-lg p-2 border-primary border-4">
            <input type="text" className="focus:outline-none w-full" />
          </div>

          <Button className="btn-primary">
            <MagnifyingGlass size={25} />
          </Button>
        </form>
      </section>

      <section></section>

      <section></section>
    </div>
  );
}
