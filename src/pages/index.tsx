import Button from "@/components/Button";
import Input from "@/components/Input";
import { MagnifyingGlass, Spinner, Warning } from "phosphor-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "@/services";
import { useRef, useState } from "react";
import { Post } from "@/types";
import LoadingScreen from "@/components/LoadingScreen";
import PostCard from "@/components/PostCard";
import { GetStaticProps } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import banner from "public/banner-cuidar-bem.png";
import Link from "next/link";
import logo from "public/logo-cuidar-bem.png";
import BackToTopButton from "@/components/BackToTopButton";

interface HomeProps {
  posts: Post[];
}
interface SearchFormData {
  searchInput: string;
}

export default function Home({ posts }: HomeProps) {
  const [search, setSearch] = useState("");
  const [foundPosts, setFoundPosts] = useState<Post[]>([]);
  const [foundPostsTotal, setFoundPostsTotal] = useState(0);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOrderedByRelevance, setIsOrderedByRelevance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPagination, setIsLoadingPagination] = useState(false);

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
    setIsLoading(true);

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

    setIsLoading(false);
  };

  const handlePagination = async () => {
    setIsLoadingPagination(true);

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

    setIsLoadingPagination(false);
  };

  return (
    <div className="max-w-6xl mx-auto py-6">
      <section className="space-y-8">
        <h1 className="text-center text-primary uppercase">
          Cuide Bem de Você
        </h1>

        <Swiper
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="relative">
              <Image
                className="object-cover w-full h-96"
                src={post.featured_media?.["1536x1536"] ?? banner}
                alt={post.title}
                width={510}
                height={510}
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z3CxHgAGJwJRlQ7WHwAAAABJRU5ErkJggg=="
              />

              <div className="space-y-2 bg-secondary-light bg-opacity-60 backdrop-blur-sm absolute top-1/2 md:top-[62%] left-5 max-w-[75%] py-2 px-4 rounded-lg">
                <Link
                  href={{
                    pathname: `posts/${post.id}`,
                    query: { slug: post.slug },
                  }}
                >
                  <p className="text-primary text-lg font-bold underline hover:no-underline">
                    {post.title}
                  </p>
                </Link>

                <div className="text-end">
                  <Link
                    className="btn btn-sm btn-primary inline-block"
                    href={{
                      pathname: `posts/${post.id}`,
                      query: { slug: post.slug },
                    }}
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="searching" className="space-y-6 px-2 mt-12 mb-10">
        <figure className="flex justify-center">
          <Image src={logo} alt="Logo Cuidar Bem" width={360} height={100} />
        </figure>

        <h4 className="text-center max-w-3xl mx-auto">
          Encontre os melhores conteúdos sobre saúde e bem-estar de forma
          rápida, segura e confiável.
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

      <section className="px-2 max-w-4xl mx-auto">
        {totalPages === 0 && (
          <div className="text-center text-gray-500 gap-2">
            <Warning size={68} className="inline-block" />
            <p className="max-w-md mx-auto text-xl text-center">
              Não existem artigos relacionados ao termo pesquisado!
            </p>
          </div>
        )}

        {!!foundPosts.length && (
          <>
            <div className="mb-4 flex justify-between items-center">
              <span className="text-xl">
                {foundPostsTotal} Resultado{foundPostsTotal > 1 && "s"}{" "}
                encontrado
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

            {currentPage < (totalPages as number) && (
              <div className="flex justify-center mt-8">
                <Button
                  className="btn-primary-outline w-1/2"
                  onClick={handlePagination}
                >
                  {isLoadingPagination ? (
                    <>
                      <Spinner size={22} className="animate-spin" />
                      <span className="animate-pulse">Carregando...</span>
                    </>
                  ) : (
                    "Carregar mais..."
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </section>

      <BackToTopButton />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get("posts");

  const posts = response.data.data;

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 2,
  };
};
