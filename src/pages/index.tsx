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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOrderedByRelevance, setIsOrderedByRelevance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    searchInput: yup.string().required(),
  });

  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: yupResolver(schema),
  });

  const searchPosts = async (data: SearchFormData) => {
    setSearch(data.searchInput);
    setIsOrderedByRelevance(false);

    setIsLoading(true);

    try {
      const response = await api.get("posts", {
        params: {
          search: data.searchInput,
        },
      });

      setFoundPosts(response.data.data);
      setFoundPostsTotal(response.data.size);
      setTotalPages(response.data.pages);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const onSubmit = (data: SearchFormData) => {
    searchPosts(data);
  };

  const handleFilter = async () => {
    setIsOrderedByRelevance(!isOrderedByRelevance);

    try {
      const response = await api.get("posts", {
        params: {
          search,
          orderby: !isOrderedByRelevance ? "relevance" : null,
        },
      });

      setFoundPosts(response.data.data);
      setFoundPostsTotal(response.data.size);
      setTotalPages(response.data.pages);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePagination = async () => {
    console.log(isOrderedByRelevance);
    const nextPage = currentPage + 1;

    try {
      const response = await api.get("posts", {
        params: {
          search,
          page: nextPage,
          orderby: isOrderedByRelevance ? "relevance" : null,
        },
      });

      setFoundPosts([...foundPosts, ...response.data.data]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

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
        <section className="px-2 max-w-4xl mx-auto ">
          <div className="mb-4 flex justify-between items-center">
            <span className="text-xl">
              {foundPostsTotal} Resultado{foundPostsTotal > 1 && "s"} encontrado
              {foundPostsTotal > 1 && "s"}
            </span>

            <Button
              className={`btn-sm ${
                isOrderedByRelevance ? "btn-primary" : "btn-primary-outline"
              }`}
              onClick={handleFilter}
            >
              Mais Relevantes
            </Button>
          </div>

          <ul className="space-y-10">
            {foundPosts.map((post) => (
              <li key={post.id}>
                <PostCard
                  postId={post.id}
                  postSlug={post.slug}
                  postThumbnail={post.featured_media?.thumbnail}
                  postTitle={post.title}
                  postExcerpt={post.excerpt}
                  postCategoryName={post.categories[0].name}
                  postModified={post.modified}
                />
              </li>
            ))}
          </ul>

          {currentPage < totalPages && (
            <div className="flex justify-center mt-8">
              <Button
                className="btn-primary-outline w-1/2"
                onClick={handlePagination}
              >
                Carregar mais...
              </Button>
            </div>
          )}
        </section>
      )}

      <section></section>
    </div>
  );
}
