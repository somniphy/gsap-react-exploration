"use client";
import "./sticky-cards.css";

import Image from "next/image";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const StickyCardsOHArchitecture = () => {
  const stickyCardsData = [
    {
      index: "01",
      title: "Rel.AI",
      image: "/sticky-cards/relai.jpg",
      description: "Your reliable AI automation agency.",
    },
    {
      index: "02",
      title: "ScriptStudio",
      image: "/sticky-cards/scriptstudio.jpg",
      description: "Interior Design and Architecture.",
    },
    {
      index: "03",
      title: "SailFast",
      image: "/sticky-cards/sailfast.jpg",
      description: "Experts in shipping.",
    },
    {
      index: "04",
      title: "ICED",
      image: "/sticky-cards/iced.jpg",
      description: "World class quality clothing.",
    },
  ];

  const container = useRef(null);
  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );
  return (
    <div className="sticky-cards" ref={container}>
      {stickyCardsData.map((cardData, index) => (
        <div className="sticky-card" key={index}>
          <div className="sticky-card-index">
            <h1>{cardData.index}</h1>
          </div>
          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header">{cardData.title}</h1>
              <div className="sticky-card-img">
                <img src={cardData.image} alt={cardData.title} />
              </div>
              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p>(About)</p>
                </div>
                <div className="sticky-card-copy-description">
                  <p>{cardData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCardsOHArchitecture;
