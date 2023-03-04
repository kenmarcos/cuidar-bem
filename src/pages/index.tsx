import Button from "@/components/Button";
import Input from "@/components/Input";
import { MagnifyingGlass } from "phosphor-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@/services";
import { useState } from "react";
import { Post } from "@/types";
import LoadingScreen from "@/components/LoadingScreen";

interface SearchFormData {
  searchInput: string;
}

export default function Home() {
  const [foundPosts, setFoundPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    searchInput: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: yupResolver(schema),
  });

  const searchPosts = async (data: SearchFormData) => {
    setIsLoading(true);

    try {
      const response = await api.get(`posts?search=${data.searchInput}`);

      setFoundPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const onSubmit = (data: SearchFormData) => {
    searchPosts(data);
  };

  // console.log(foundPosts);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="space-y-4">
        <h1 className="text-center text-primary uppercase">
          Cuide Bem de Você
        </h1>

        <h4 className="text-center max-w-3xl mx-auto">
          O melhor conteúdo sobre saúde e bem-estar de forma rápida, segura e
          confiável.
        </h4>

        <form
          className="flex justify-center gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            containerClassName="border-primary border-4 w-full max-w-xl"
            type="text"
            placeholder="Pesquisar artigos, notícias, dicas..."
            register={register("searchInput")}
          />

          <Button className="btn-primary" type="submit">
            <MagnifyingGlass size={25} />
          </Button>
        </form>
      </section>

      {isLoading && <LoadingScreen />}

      {!!foundPosts && (
        <section>
          <ul>
            {foundPosts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </section>
      )}

      <section></section>
    </div>
  );
}
