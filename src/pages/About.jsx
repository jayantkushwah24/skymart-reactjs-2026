import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={35}
      >
        <path d="M13 10H20L11 23V14H4L13 1V10Z"></path>
      </svg>
      <h1>About SkyMart</h1>
      <p>
        SkyMart is a next-generation e-commerce platform built to make online{" "}
        <br />
        shopping fast, fair, and enjoyable — for everyone.
      </p>
      <div id="analytics" className="flex">
        <div>
          <div>📦</div>
          <h1>20K+</h1>
          <p>Products</p>
        </div>
        <div>
          <div>👤</div>
          <h1>50K+</h1>
          <p>Happy Customers</p>
        </div>
        <div>
          <div>☆</div>
          <h1>4.9</h1>
          <p>Avg. Rating</p>
        </div>
        <div>
          <div>🚚</div>
          <h1>99%</h1>
          <p>On-time Delivery</p>
        </div>
      </div>

      <div id="our-story">
        <h1>Our Story</h1>
        <p>
          SkyMart started in 2022 as a small side project — two engineers tired
          of bloated, slow e-commerce experiences. We asked ourselves: what if
          shopping online was actually enjoyable?
        </p>
        <p>
          Three years later, SkyMart serves over 50,000 customers across the
          country. We stock electronics, fashion, jewelry, and everyday
          essentials — all at prices that don't require a second mortgage.
        </p>
        <p>
          We're still the same team at heart: obsessed with speed, transparency,
          and making you feel good about every purchase you make here.
        </p>
      </div>

      <div className="" id="we-stand-for">
        <h1>What We Stand For</h1>

        <div className="grid grid-cols-2 grid-rows-2">
          <div>
            <div>🤝</div>
            <div>
              <h1>Trust</h1>
              <p>
                Every product is verified for quality and authenticity before
                listing.
              </p>
            </div>
          </div>

          <div>
            <div>🚚</div>
            <div>
              <h1>Speed</h1>
              <p>
                We obsess over delivery times so your orders arrive when
                promised.
              </p>
            </div>
          </div>

          <div>
            <div>👥</div>
            <div>
              <h1>Community</h1>
              <p>
                Built around real customer feedback, not just business metrics.
              </p>
            </div>
          </div>

          <div>
            <div>☆</div>
            <div>
              <h1>Quality</h1>
              <p>
                We curate the best — no filler, no junk, just great products.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="meet-our-team" className="grid grid-cols-4">
        <div>
          <h1>D</h1>
          <h2>Devendra Kushwah</h2>
          <p>Founder & CEO</p>
        </div>
        <div>
          <h1>H</h1>
          <h2>Hemlata Kushwah</h2>
          <p>Head of Product</p>
        </div>
        <div>
          <h1>J</h1>
          <h2>Jayant Kushwah</h2>
          <p>Lead Engineer</p>
        </div>
        <div>
          <h1>M</h1>
          <h2>Mahishita Kushwah</h2>
          <p>Design Director</p>
        </div>
      </div>

      <div id="ready-to-shop">
        <h1>Ready to shop?</h1>
        <p>Explore thousands of products at unbeatable prices.</p>
        <button onClick={() => navigate("/products")}>Browse Products ➔</button>
      </div>
    </div>
  );
};

export default About;
