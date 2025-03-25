import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     "x-cg-demo-api-key": "CG-yPJpnb1xrZRhjzbGPN5prrtJ",
    //   },
    // };
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
    //   options
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setAllCoin(res);
    //     console.log(allCoin);
    //   })
    //   .catch((err) => console.error(err));

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-geii868PoaTr6DBicnDWbHBe",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setAllCoin(json))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
