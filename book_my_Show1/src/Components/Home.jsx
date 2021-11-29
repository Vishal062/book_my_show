import { useEffect, useState } from "react";
import { link } from "react-router-dom";

export const Home = () => {
  const [city, setCity] = useState("");
  const [totalData, setTotalData] = useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    getMovieCity();
  }, []);

  function getMovieCity() {
    fetch("http://localhost:3001/bookshow")
      .then((data) => data.json())
      .then((data) => {
        setTotalData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmit(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getMovieCity();

    var newArray = totalData.filter((e) => e.city === city);
    setShowData(newArray);
    setCity("");
  }

  return (
    <div>
      <link to="createbookShow">Book Show</link>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">city: &emsp;</label>
        <input
          onChange={handleSubmit}
          type="text"
          name="City"
          value={city}
          id="city"
          placeholder="Enter City"
        />
        <br />

        <input type="submit" value="Submit" />
      </form>

      {showData.length === 0 && (
        <div
          style={{
            marginTop: "20px",
            textDecoration: "underline",
            fontWeight: "700"
          }}
        >
          either you have not selected anything
        </div>
      )}
      {showData.map((e) => {
        return (
          <div
            key={e.id}
            style={{
              border: "1px solid black"
            }}
          >
            <p>
              <span style={{ color: "purple" }}>Title:</span>
              {e.Title}
            </p>
            <p>
              <span style={{ color: "purple" }}>Discription:</span>
              {e.Discription}
            </p>
            <p>
              <span style={{ color: "purple" }}>Date:</span>
              {e.Date}
            </p>
            <p>
              <span style={{ color: "purple" }}>Time:</span>
              {e.time}
            </p>
            <p>
              <span style={{ color: "purple" }}>City:</span>
              {e.city}
            </p>
            <p>
              <span style={{ color: "purple" }}>Category:</span>
              {e.category}
            </p>
          </div>
        );
      })}
    </div>
  );
};
