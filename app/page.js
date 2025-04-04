"use client";

import Image from "next/image";
import lineup from "../public/json/lineup.json";
import { useState, useEffect } from "react";
import onepink from "../public/img/posters/1-pink.png";
import twopink from "../public/img/posters/2-pink.png";
import threepink from "../public/img/posters/3-pink.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [onepink, twopink, threepink];
  const handleClick = () => {};
  const [height, setHeight] = useState();

  useEffect(() => {
    document.onscroll = function () {
      if (window.innerHeight + window.scrollY > document.body.clientHeight) {
        document.getElementById("arrow").style.display = "none";
      } else {
        document.getElementById("arrow").style.display = "flex";
      }
    };
  }, [handleClick]);
  useEffect(() => {
    const pageHeight = window.innerHeight;
    setHeight(pageHeight);
    const intervalId = setInterval(() => {
      // if (currentIndex > 3) {
      //   setCurrentIndex(currentIndex + 1);
      // } else {
      //   setCurrentIndex(0);
      // }
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [handleClick]);

  return (
    <main>
      <div className="arrow_container" id="arrow">
        <div
          className="arrow"
          onClick={() => window.scrollBy(0, height, { behavior: "smooth" })}
        >
          <Image fill src="/img/icons/arrow-down.png" />
        </div>
      </div>

      <section className="hero">
        <div className="hero_image">
          <Image src={images[currentIndex]} fill />
        </div>
        <div className="hero_info">
          <div className="hero_text">
            <h1>3-5 JULY 2025</h1>
            <div>
              <div className="hero_location">
                <Image src="/img/icons/location-white.png" fill />
              </div>
              <h2>THREE POOLS FARM</h2>
            </div>
            <button className="button1">
              {" "}
              <a href="https://ra.co/events/2038340" target="_blank">
                buy tickets
              </a>
            </button>
          </div>
          <div className="hero_sponsors">
            <div>
              <Image src="/img/sponsors/tcs.png" fill />
            </div>
            <div>
              <Image src="/img/sponsors/threepools.png" fill />
            </div>
            <div>
              <Image src="/img/dfr-logo/dfr.png" fill />
            </div>
          </div>
        </div>
      </section>
      <section className="home_intro">
        <div>
          <p>
            <span> DANCING FAMILY FESTIVAL</span> IS A <span>3-DAY </span>
            CAMPING FESTIVAL IN <span>SOUTH WALES</span>. EXPECT FAMILY B2B’S
            ALL WEEKEND LONG.
            <br></br>
            <br></br>
            JOIN US FROM <span>JULY 3-5, 2025</span> FOR OUR FIRST EDITION.
          </p>
        </div>
        <div className="home_intro_images">
          <div>
            <Image src="/img/pics/1.jpg" fill />
          </div>
          <div>
            <Image src="/img/pics/2.jpg" fill />
          </div>
          <div>
            <Image src="/img/pics/3.jpg" fill />
          </div>
          <div>
            <Image src="/img/pics/4.jpg" fill />
          </div>
          <div>
            <Image src="/img/pics/5.jpg" fill />
          </div>
          <div>
            <Image src="/img/pics/6.jpg" fill />
          </div>
        </div>
      </section>
      <section className="home_lineup">
        <div>
          <h1> ✹ </h1>
          <h2>lineup</h2>
          <ul>
            {lineup.map((artist) => {
              return <li key={artist}>{artist}</li>;
            })}
          </ul>
          <button className="button1" onClick={() => router.push("/lineup")}>
            Dates
          </button>
        </div>
      </section>
      <section className="home_quotes">
        <div>
          <p>
            ‘One of the most exciting festivals happening this Summer in Wales.’
          </p>
          <h3>- Our Mum</h3>
          <p>
            ‘Dancing Family are known for their dance events, I can't wait to
            see what they do here.’
          </p>
          <h3>- Our Dad</h3>
          <p>‘Wales finally has a good dance festival.’</p>
          <h3>- Our cousin Vinnie</h3>
        </div>
      </section>
    </main>
  );
}
