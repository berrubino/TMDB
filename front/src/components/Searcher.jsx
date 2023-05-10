import React from "react";

function Searcher({ search, handleSearch }) {
  /*   const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`${BASE_URL}/search/movie`, {
        params: { api_key: API_KEY, query: search.value },
      })
      .then((res) => res.data)
      .catch((error) => console.error(error));
  }; */

  return (
    <form onSubmit={handleSearch}>
      <label className="label my-3">Search</label>
      <input
        className="input"
        type="text"
        placeholder="Seach a movie"
        {...search}
      />
      <input type="submit" />
    </form>
  );
}

export default Searcher;
