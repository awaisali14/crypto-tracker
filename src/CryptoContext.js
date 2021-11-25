import { createContext, useState, useEffect } from "react";

const Crypto = createContext({
  currency: "",
  symbol: "",
  changeCurrency: (currency) => {},
});

export const CryptoContext = (props) => {
  const [currency, setCurreny] = useState("PKR");
  const [symbol, setSymbol] = useState("$");

  const changeCurrency = (currency) => {
    setCurreny(currency);
  };

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "PKR") setSymbol("RS ");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{
        currency: currency,
        symbol: symbol,
        changeCurrency: changeCurrency,
      }}
    >
      {props.children}
    </Crypto.Provider>
  );
};

export default Crypto;
