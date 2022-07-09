// contentful
import { createClient } from "contentful";
// components
import ArticleCard from "../components/articleCard";

export default function Home({ chinaArticles, japanArticles, koreaArticles }) {
  return (
    <>
      {/* China */}
      {chinaArticles.map((article) => {
        return (
          <ArticleCard country="china" key={article.sys.id} article={article} />
        );
      })}
      {/* Japan */}
      {japanArticles.map((article) => {
        return (
          <ArticleCard country="japan" key={article.sys.id} article={article} />
        );
      })}
      {/* Korea */}
      {koreaArticles.map((article) => {
        return (
          <ArticleCard country="korea" key={article.sys.id} article={article} />
        );
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
  const chinaRes = await client.getEntries({ content_type: "china" });
  const japanRes = await client.getEntries({ content_type: "japan" });
  const koreaRes = await client.getEntries({ content_type: "korea" });

  return {
    props: {
      chinaArticles: chinaRes.items,
      japanArticles: japanRes.items,
      koreaArticles: koreaRes.items,
    },
  };
}
