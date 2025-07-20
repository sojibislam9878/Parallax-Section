import { useEffect, useRef } from 'react';
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/functions";
// import './BlurEffectParallax.css'; // Or move styles to a styled-component or CSS module

const BlurEffectParallax = ({ form, setAttributes, attributes }) => {

  const { contents, options } = attributes || {};
  const { title, description, btn } = contents || {};

  // console.log(attributes.styles.background);



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

      // Start measuring scroll only after reaching the top of the section
      const scrollFromSectionTop = scrollY - sectionTop;

      // If section not yet reached, skip blur effect
      if (scrollFromSectionTop < 0) {
        parallaxBg.style.transform = `translateY(0px)`;
        parallaxBg.style.filter = `blur(0px) brightness(1)`;
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0px)';
        return;
      }

      // Parallax movement (relative to section scroll)
      parallaxBg.style.transform = `translateY(${scrollFromSectionTop * 0.5}px)`;

      // Scroll progress (from 0 to 1)
      const scrollProgress = Math.min(scrollFromSectionTop / sectionHeight, 1);

      // Blur & brightness
      const blurValue = scrollProgress * 8;
      parallaxBg.style.filter = `blur(${blurValue}px) brightness(${1 - scrollProgress * 0.4})`;

      // Content fade and shift
      heroContent.style.opacity = 1 - scrollProgress * 0.7;
      heroContent.style.transform = `translateY(${scrollProgress * 50}px)`;
    };


    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      parallaxBg.style.transform = 'none';
      parallaxBg.style.filter = 'none';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'none';
      return;
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);


  return (
    <div className='BPBlurEffectParallax'>
      <section className="hero" ref={heroSectionRef}>
        <div className="hero-bg" ref={parallaxBgRef}></div>
        <div className="hero-content" ref={heroContentRef}>
          {form === "server" ? (
            <>
              <RichText
                tagName="h1"
                className="title"
                placeholder={__("title...", "section-collection")}
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
                placeholder={__("description...", "section-collection")}
                value={description.text}
                onChange={(value) =>
                  setAttributes({
                    contents: updateData(contents, value, "description", "text"),
                  })
                }
              />
            </>
          ) : (
            <>
              <RichText.Content tagName="h1" className="title" value={title.text} />
              <RichText.Content tagName="p" className="description" value={description.text} />
            </>
          )}

          {
            btn.status && <a target={options.isNewTab ? "_blank" : "_self"} rel="noreferrer" href={btn.link}><button className="btn">{btn.text}</button></a>
          }
        </div>
      </section>
    </div>
  );
};

export default BlurEffectParallax;
