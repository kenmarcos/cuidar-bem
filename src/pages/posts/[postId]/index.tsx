import { api } from "@/services";
import { Post, PostDetails } from "@/types";
import { format, parseISO } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import parse, {
  HTMLReactParserOptions,
  DOMNode,
  Element,
  domToReact,
  attributesToProps,
} from "html-react-parser";
import Image from "next/image";

interface PostDetailsProps {
  post: PostDetails;
}

const contentOptions: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.name === "h2") {
      return (
        <h2 className="mt-8 mb-4 text-primary">
          {domToReact(domNode.children, contentOptions)}
        </h2>
      );
    }

    if (domNode instanceof Element && domNode.name === "h3") {
      return (
        <h3 className="mt-6 mb-2 text-primary-light">
          {domToReact(domNode.children, contentOptions)}
        </h3>
      );
    }

    if (domNode instanceof Element && domNode.name === "h4") {
      return (
        <h4 className="mt-4 text-secondary">
          {domToReact(domNode.children, contentOptions)}
        </h4>
      );
    }

    if (domNode instanceof Element && domNode.name === "p") {
      return (
        <p className="mb-4 leading-7">
          {domToReact(domNode.children, contentOptions)}
        </p>
      );
    }

    if (domNode instanceof Element && domNode.name === "ul") {
      return (
        <ul className="my-4 pl-6 space-y-2 list-disc">
          {domToReact(domNode.children, contentOptions)}
        </ul>
      );
    }

    if (domNode instanceof Element && domNode.name === "a") {
      const props = attributesToProps(domNode.attribs);
      return (
        <a
          {...props}
          className="underline text-primary-light cursor-pointer hover:no-underline"
        >
          {domToReact(domNode.children, contentOptions)}
        </a>
      );
    }
  },
};

const bibliographyOptions: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.name === "ul") {
      return (
        <ul className="bg-white p-8 space-y-2 list-disc">
          {domToReact(domNode.children, bibliographyOptions)}
        </ul>
      );
    }
  },
};

function PostDetails({ post }: PostDetailsProps) {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <article className="px-2 space-y-8">
        <h2 className="text-primary text-center">{post.title}</h2>

        <div className="flex justify-evenly items-center py-4 border-b-2 border-primary-light">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.picture}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full"
            />

            <div>
              <span>
                {post.author.name} |{" "}
                <strong className="capitalize">{post.author.profession}</strong>
              </span>

              <br />

              <time className="text-xs font-semibold text-gray-400">
                {format(parseISO(post.published), "dd/MM/yyyy hh'h'mm")} |
                Atualização:{" "}
                {format(parseISO(post.modified), "dd/MM/yyyy hh'h'mm")}
              </time>
            </div>
          </div>

          <div>
            <span className="uppercase text-xs text-primary-light">
              {post.categories[0].name}
            </span>

            <br />

            {!!post.tags.length && (
              <div className="flex gap-1">
                <span>tags:</span>
                <ul className="flex gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag.id}>
                      <small>#{tag.name}</small>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {parse(post.content, contentOptions)}

          <details className="mt-10 rounded-lg overflow-hidden">
            <summary className="bg-secondary p-4 text-primary-light font-bold cursor-pointer hover:text-secondary-light">
              Bibliografia
            </summary>

            {parse(post.bibliography, bibliographyOptions)}
          </details>
        </div>
      </article>
    </div>
  );
}

export default PostDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const postId = context.params?.postId;

  const response = await api.get(`posts/${postId}`);

  const post = response.data;

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 2,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get("posts");

  const posts = response.data.data;

  const paths = posts.map((post: Post) => {
    return { params: { postId: `${post.id}` } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
