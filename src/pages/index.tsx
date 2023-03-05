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
import PostCard from "@/components/PostCard";

interface SearchFormData {
  searchInput: string;
}

export default function Home() {
  const [foundPosts, setFoundPosts] = useState<Post[]>([]);
  const [foundPostsTotal, setFoundPostsTotal] = useState(0);
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
      setFoundPostsTotal(response.data.size);
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
    <div className="max-w-6xl mx-auto py-8 space-y-16">
      <section className="space-y-4 px-2">
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

      {!!foundPosts.length && (
        <section className="px-2">
          <span className="mb-4 block max-w-4xl mx-auto text-xl">
            {foundPostsTotal} Resultado{foundPostsTotal > 1 && "s"} encontrado
            {foundPostsTotal > 1 && "s"}
          </span>

          <ul className="max-w-4xl mx-auto space-y-10">
            {foundPosts.map((post) => (
              <li key={post.id}>
                <PostCard
                  postSlug={post.slug}
                  postThumbnail={post.featured_media.thumbnail}
                  postTitle={post.title}
                  postExcerpt={post.excerpt}
                  postCategoryName={post.categories[0].name}
                  postModified={post.modified}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section></section>
    </div>
  );
}
