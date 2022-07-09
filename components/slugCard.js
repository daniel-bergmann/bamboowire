// nextJS
import Image from "next/image";
// contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function slugCard({ article, headline, featuredImage }) {
  return (
    <article>
      <div>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h1>{headline}</h1>
      </div>
      <div>{documentToReactComponents(article)}</div>
    </article>
  );
}
