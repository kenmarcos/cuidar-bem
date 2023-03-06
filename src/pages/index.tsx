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
  const [search, setSearch] = useState("");
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
    setSearch(data.searchInput);

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

  const handleFilter = async () => {
    try {
      const response = await api.get("posts", {
        params: {
          search,
          orderby: "relevance",
        },
      });

      setFoundPosts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(foundPosts);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <section className="space-y-4 px-2 mb-16">
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
          <div className="mb-4 max-w-4xl mx-auto flex justify-between items-center">
            <span className="text-xl">
              {foundPostsTotal} Resultado{foundPostsTotal > 1 && "s"} encontrado
              {foundPostsTotal > 1 && "s"}
            </span>

            <Button
              className="btn-sm btn-primary-outline"
              onClick={handleFilter}
            >
              Mais Relevantes
            </Button>
          </div>

          <ul className="max-w-4xl mx-auto space-y-10">
            {foundPosts.map((post) => (
              <li key={post.id}>
                <PostCard
                  postId={post.id}
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
