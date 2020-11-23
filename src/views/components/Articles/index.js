import React, { useState, useEffect } from "react";
import SkeletonArticle from "../SkeletonArticle";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setArticles(data);
    }, 5000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}

      {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
    </div>
  );
};

export default Articles;
