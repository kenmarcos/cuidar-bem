import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  postId: number;
  postSlug: string;
  postThumbnail: string;
  postTitle: string;
  postExcerpt: string;
  postCategoryName: string;
  postModified: string;
}

const PostCard = ({
  postId,
  postSlug,
  postThumbnail,
  postTitle,
  postExcerpt,
  postCategoryName,
  postModified,
}: PostCardProps) => {
  return (
    <Link
      href={{
        pathname: `posts/${postId}`,
        query: { slug: postSlug },
      }}
      className="flex gap-4 flex-col sm:flex-row sm:items-center"
    >
      <figure>
        <Image
          src={postThumbnail}
          width={150}
          height={150}
          alt={postTitle}
          quality={100}
          className="hover:scale-105"
        />
      </figure>

      <div className="flex flex-col gap-1 sm:justify-center">
        <span className="uppercase text-xs text-primary-light">
          {postCategoryName}
        </span>

        <h4 className="max-w-2xl text-primary hover:underline">{postTitle}</h4>

        <p className="max-w-2xl">{postExcerpt.replace(/&hellip;/i, "...")}</p>

        <time className="text-xs font-semibold text-gray-400">
          {format(parseISO(postModified), "dd/MM/yyyy hh'h'mm")}
        </time>
      </div>
    </Link>
  );
};

export default PostCard;
