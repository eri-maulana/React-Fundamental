const ArticleStatus = ({isNew}) => {
  return isNew && <span>--Baru !!!</span>
}

const NewArticle = () => {
  return <span>--Baru!!!</span>
}

function Article(props) {
//   const name = "Eri Maulana";
//   const title = ["react js", "next js", "node js"];

  // title.map(item => item)

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date} <br /> tags: {props.tags.join(", ")}{" "}
       {/* <ArticleStatus isNew={props.isNew} /> */}
       {props.isNew && <NewArticle />}
       </small> 
      <br /> <br />
    </>
  );
}

export default Article;
