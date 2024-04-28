import { useState, useEffect } from "react";
import Axios from "axios";

function Crypto() {
  const [search, SetSearch] = useState("");
  const [crypto, SetCrypto] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    Axios.get("https://openapiv1.coinstats.app/coins", {
      headers: {
        accept: "application/json",
        "X-API-KEY": "ud8kQs5oe6F0rj6IiN4YYc5c5N+Yx+rsSarUthZz/7A=",
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.result);
        SetCrypto(res.data.result);
        console.log(crypto);
        setLoader(false);
        // SetCrypto(res.data); // Assuming you want to set some state with the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [search]);

  const searchData = crypto.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center">Crypto Detail </h1>
      <div className="container d-flex justify-content-center my-3">
        <input
          className="form-control"
          type="text"
          placeholder="search your crypto..."
          onChange={(e) => {
            SetSearch(e.target.value);
          }}
        />
      </div>

      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Available Supply</th>
            </tr>
          </thead>
          <tbody>
            {loader ? (
              <img
                style={{ width: "50%" }}
                src="images/loader.gif"
                alt="images"
                className="img-fluid rounded mx-auto d-block"
              />
            ) : (
              searchData.map((crypto, index) => (
                <tr key={index}>
                  <td className="rank">{crypto.rank}</td>
                  <td className="logo">
                    <a href={crypto.websiteUrl}>
                      <img src={crypto.icon} alt="logo" width="30px" />
                    </a>
                    <p>{crypto.name}</p>
                  </td>
                  <td className="symbol">{crypto.symbol}</td>
                  <td>$ {Math.round(crypto.marketCap)} </td>
                  <td>$ {Math.round(crypto.price)} </td>
                  <td>{crypto.availableSupply}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crypto;
