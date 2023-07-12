import React from "react";
import "./Articles.css";
import Cash from "../images/image-currency.jpg";
import Confetti from "../images/image-confetti.jpg";
import Restaurant from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";

const Articles = () => {
  const flexItems = [
    {
      image: Cash,
      writer: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      image: Restaurant,
      writer: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      image: Plane,
      writer: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      image: Confetti,
      writer: "By Claire Robinson",
      title: "Our invite-only Beta accounts are now live!",
      text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];

  return (
    <section className="padding articles">
      <h2>Latest Articles</h2>
      <div className="article-container flex">
        {flexItems.map((data) => (
          <div className="article-card" key={data.text}>
            <img
              src={data.image}
              alt="Article image"
              className="article-card-image"
            />
            <div>
              <p className="article-writer subtext-color">{data.writer}</p>
              <p className="article-title">{data.title}</p>
              <p className="article-text subtext-color">{data.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
