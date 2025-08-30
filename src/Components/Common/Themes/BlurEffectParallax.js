import { useEffect, useRef } from 'react';
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/functions";

const BlurEffectParallax = ({ isBackend = false, setAttributes, attributes }) => {
  const { contents, options } = attributes || {};
  const { title, description, btns } = contents || {};
  const { btn1 } = btns || {};

  const parallaxBgRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const parallaxBg = parallaxBgRef.current;
    const heroContent = heroContentRef.current;
    const heroSection = heroSectionRef.current;

    if (!parallaxBg || !heroContent || !heroSection) return;

    const handleScroll = () => {
      const sectionTop = heroSection.offsetTop;
      const sectionHeight = heroSection.offsetHeight;
      const scrollY = window.scrollY;

      const scrollFromSectionTop = scrollY - sectionTop;

      if (scrollFromSectionTop < 0) {
        parallaxBg.style.transform = `translateY(0px)`;
        parallaxBg.style.filter = `blur(0px) brightness(1)`;
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0px)";
        return;
      }

      parallaxBg.style.transform = `translateY(${
        scrollFromSectionTop * 0.5
      }px)`;

      const scrollProgress = Math.min(scrollFromSectionTop / sectionHeight, 1);

      const blurValue = scrollProgress * 8;
      parallaxBg.style.filter = `blur(${blurValue}px) brightness(${
        1 - scrollProgress * 0.4
      })`;
      heroContent.style.opacity = 1 - scrollProgress * 0.7;
      heroContent.style.transform = `translateY(${scrollProgress * 50}px)`;
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      parallaxBg.style.transform = "none";
      parallaxBg.style.filter = "none";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "none";
      return;
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="BPBlurEffectParallax">
      <section className="hero" ref={heroSectionRef}>
        <div className="hero-bg" ref={parallaxBgRef}></div>
        <div className="hero-content" ref={heroContentRef}>
          {isBackend ? (
            <>
              <RichText
                tagName="h1"
                className="title"
                placeholder={__("title...", "parallax-section")}
                value={title.text}
                onChange={(value) =>
                  setAttributes({
                    contents: updateData(contents, value, "title", "text"),
                  })
                }
              />
              <RichText
                tagName="p"
                className="description"
                placeholder={__("description...", "parallax-section")}
                value={description.text}
                onChange={(value) =>
                  setAttributes({
                    contents: updateData(
                      contents,
                      value,
                      "description",
                      "text"
                    ),
                  })
                }
              />
            </>
          ) : (
            <>
              <RichText.Content
                tagName="h1"
                className="title"
                value={title.text}
              />
              <RichText.Content
                tagName="p"
                className="description"
                value={description.text}
              />
            </>
          )}

          {btn1.status && (
            <a
              target={options.isNewTab ? "_blank" : "_self"}
              rel="noreferrer"
              href={btn1.link}
            >
              <button className="btn">{btn1.text}</button>
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlurEffectParallax;
