function Article(props) {
//   const name = "Eri Maulana";
//   const title = ["react js", "next js", "node js"];

  // title.map(item => item)

  return (
    <>
      <h3>{props.title}</h3>
      <small>Date : {props.date} <br /> tags: {props.tags.join(", ")}</small> 
      <br /> <br />
    </>
  );
}

export default Article;
