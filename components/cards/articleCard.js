import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ article, country }) {
  const { headline, slug, thumbnail } = article.fields;

  return (
    <div className="card">
      <div className="thumbnail">
        <Image
          alt={headline}
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{headline}</h4>
        </div>
        <div className="actions">
          <Link href={`/articles/${country}/` + slug}>
            <a>read</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
