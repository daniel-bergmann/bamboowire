// contentful
import { createClient } from "contentful";

// components
import SlugCard from "../../../components/cards/slugCard";

// connecting to cloudinary client to access the data
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// generating static path from slug at buld time
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "korea",
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
    content_type: "japan",
    // limiting what we get from the CMS to the right content
    "fields.slug": params.slug,
  });

  return {
    props: {
      articleData: items[0],
    },
  };
}

export default function Slug({ articleData }) {
  const { featuredImage, headline, article } = articleData.fields;
  console.log(article.content);
  return (
    <SlugCard
      featuredImage={featuredImage}
      headline={headline}
      article={article}
    />
  );
}
