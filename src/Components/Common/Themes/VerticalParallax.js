import { useEffect, useRef } from "react";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/functions";

const VerticalParallax = ({ isBackend = false, attributes, setAttributes }) => {
  const parallaxRef = useRef(null);
  const { contents, options } = attributes || {};
  const { title, description, btns } = contents || {};
  const { btn1 } = btns || {};

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.backgroundPositionY = offset * 0.8 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="BPVerticalParallax">
      <div ref={parallaxRef} className="parallax-item">
        <div className="text-cont">
          {isBackend ? (
            <>
              <RichText
                tagName="h2"
                className="title"
                placeholder={__("title...", "parallax-section")}
                value={title.text}
                onChange={(value) =>
                  setAttributes({
                    content: updateData(contents, value, "title", "text"),
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
                    content: updateData(contents, value, "description", "text"),
                  })
                }
              />
            </>
          ) : (
            <>
              <RichText.Content
                tagName="h2"
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

          {btn1?.status && (
            <a
              target={options.isNewTab ? "_blank" : "_self"}
              rel="noreferrer"
              href={btn1?.link}
            >
              <button className="btn">{btn1?.text}</button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default VerticalParallax
