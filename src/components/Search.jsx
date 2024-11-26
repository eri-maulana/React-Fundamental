import {useState} from "react"
function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Article: <input type="text" onChange={onSearchChange} />
      </div>
      <small>Ditemukan {props.totalPosts} data dengan pencarian kata {search}</small>
    </>
  );
}

export default Search;
