import React from "react";
import "./Body.css";
import IconApi from "../images/icon-api.svg";
import IconBudgeting from "../images/icon-budgeting.svg";
import IconOnBoarding from "../images/icon-onboarding.svg";
import IconOnline from "../images/icon-online.svg";

const Body = () => {
  const flexItems = [
    {
      Image: IconBudgeting,
      Title: "Online Banking",
      Subtext:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
    },
    {
      Image: IconOnline,
      Title: "Simple Budgeting",
      Subtext:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      Image: IconOnBoarding,
      Title: "Fast Onboarding",
      Subtext:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      Image: IconApi,
      Title: "Open API",
      Subtext:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <section className="padding-left body">
      <h2 className="body-header">Why choose Easybank?</h2>
      <p className="subtext-color">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      <div className="flex cards">
        {flexItems.map((data) => (
          <div className="card" key={data.Title}>
            <img className="card-image" src={data.Image} alt="Icon" />
            <h3 className="card-title">{data.Title}</h3>
            <p className="card-subtitle subtext-color">{data.Subtext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
