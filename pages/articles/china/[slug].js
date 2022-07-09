// nextJS
import Image from "next/image";
// contentful
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// connecting to cloudinary client to access the data
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// generating path at buld time
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "china",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    // shows a page instead of something else if the slug is invalid
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "china",
    // limiting what weget from the CMS
    "fields.slug": params.slug,
  });

  return {
    props: {
      articleData: items[0],
    },
  };
}

export default function Slug({ articleData }) {
  console.log(articleData);
  const { featuredImage, headline, article } = articleData.fields;
  console.log(article.content);
  return (
    <div>
      <div className="banner">
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h1>{headline}</h1>
      </div>
      <div className="article">{documentToReactComponents(article)}</div>
    </div>
  );
}
