// contentful
import { createClient } from "contentful";
// components
import ArticleCard from "../components/articleCard";

export default function Home({ articles }) {
  return (
    <>
      {articles.map((article) => {
        return <ArticleCard key={article.sys.id} article={article} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  // connecting to cloudinary client to access the data
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  // pass in the id of each content model as content_type in the getEntries function
  const res = await client.getEntries({ content_type: "china" });

  return {
    props: {
      articles: res.items,
    },
  };
}
