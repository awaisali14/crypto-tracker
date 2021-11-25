/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import Crypto from "../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
});
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Carousel = () => {
  const ctx = useContext(Crypto);
  const classes = useStyles();
  const currency = ctx.currency;

  const [trending, setTrending] = useState([]);

  const fetchCoins = async () => {
    const response = await axios.get(TrendingCoins(currency));
    setTrending(response.data);
    console.log(response.data);
  };

  const items = trending.map((el) => {
    const profit = el.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coin/${el.id}`} className={classes.carouselItem}>
        <img
          src={el.image}
          alt={el.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {el.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "green" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {el.price_change_percentage_24h.toFixed(2)}%
          </span>
        </span>

        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {ctx.symbol}
          {numberWithCommas(el.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  console.log(items);

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const responsive = {
    0: {
      itmes: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
