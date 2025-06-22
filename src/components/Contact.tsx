import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "word" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "powe1.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact" className="pb-10">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div className="">
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <h3>Contact Us</h3>
        <p>(123) 456-789</p>
        <p>nagyjohn121@gmail.com</p>
      </div>
      <div className="">
        <h3>Open Every Day</h3>
        {openingHours.map((time) => (
          <p key={time.day}>
            {time.day} : {time.time}
          </p>
        ))}
      </div>
      <div className="">
        <h3>Socials</h3>
        <div className="flex-center gap-5">
          {socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              key={social.name}
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
