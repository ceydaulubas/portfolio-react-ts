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
  return (
    <ArticlesContainer>
      {mediumArticles.map((item: Article) => (
        <ArticleBox key={item.id} href={item.website} target="_blank" rel="noopener noreferrer">
          <ArticleImage src={item.photo} alt="" />
          <ArticleInfo>
            <ArticleTitle>{item.title}</ArticleTitle>
            <ArticleSubject>{item.subject}</ArticleSubject>
          </ArticleInfo>
        </ArticleBox>
      ))}
    </ArticlesContainer>
  );
};

export default Articles;
