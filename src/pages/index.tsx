import Button from "@/components/Button";
import Input from "@/components/Input";
import { MagnifyingGlass } from "phosphor-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@/services";

interface SearchFormData {
  searchInput: string;
}

const searchPosts = async (data: SearchFormData) => {
  try {
    const response = await api.get(`posts?search=${data.searchInput}`);

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default function Home() {
  const schema = yup.object().shape({
    searchInput: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SearchFormData) => {
    searchPosts(data);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="space-y-4">
        <h1 className="text-center text-primary uppercase">
          Cuide Bem de Você
        </h1>

        <h4 className="text-center max-w-3xl mx-auto">
          Os melhores conteúdos sobre saúde e bem-estar de forma rápida, segura
          e confiável.
        </h4>

        <form
          className="flex justify-center gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            containerClassName="border-primary border-4 w-full max-w-xl"
            type="text"
            register={register("searchInput")}
          />

          <Button className="btn-primary" type="submit">
            <MagnifyingGlass size={25} />
          </Button>
        </form>
      </section>

      <section></section>

      <section></section>
    </div>
  );
}
