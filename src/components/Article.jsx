function Article(props) {
//   const name = "Eri Maulana";
//   const title = ["react js", "next js", "node js"];

  // title.map(item => item)

  return (
    <>
      <div>{props.name}</div>
      <div>
        {props.titles.map((title) => {
         return <div>{title}</div>;
        })}
      </div>
    </>
  );
}

export default Article;
