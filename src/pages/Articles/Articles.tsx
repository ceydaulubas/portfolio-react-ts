import { useState } from "react";
import { Pagination } from "antd";
import { mediumArticles } from "../../assets/copy/mediumArticles";
import { ArticlesContainer, ArticleBox, ArticleImage, ArticleInfo, ArticleTitle, ArticleSubject } from "./Article.sc";

interface Article {
  id: string;
  photo: string;
  title: string;
  website: string;
  subject: string;
}

const Articles = () => {
  // Create state for determining which articles will be shown on each page.
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4); // The number of articles to be shown per page

  // Calculate the starting and ending points of the articles
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  // Filter the articles to be shown on the current page
  const currentArticles = mediumArticles.slice(startIndex, endIndex); 

  // Change the current page when the user clicks on the pagination component
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ArticlesContainer>
        {currentArticles.map((item: Article) => (
          <ArticleBox key={item.id} href={item.website} target="_blank" rel="noopener noreferrer">
            <ArticleImage src={item.photo} alt="" />
            <ArticleInfo>
              <ArticleTitle>{item.title}</ArticleTitle>
              <ArticleSubject>{item.subject}</ArticleSubject>
            </ArticleInfo>
          </ArticleBox>
        ))}
      </ArticlesContainer>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={mediumArticles.length}
        onChange={handlePageChange}
        style={{ marginTop: "20px", textAlign: "center" }} 
      />
    </>
  );
};

export default Articles;
