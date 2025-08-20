import { useEffect, useRef } from "react";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/functions";

const ThreeImageParallax = ({
  attributes,
  setAttributes,
  isBackend = false,
}) => {
  const { contents, options, styles } = attributes || [];
  const { title, subTitle, badge, products, description, btns } =
    contents || {};

  // console.log(badge.text);

  const wrapperRef = useRef(null);
  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);
  const contentRef = useRef(null);
  const imageSectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const leavesContainerRef = useRef(null);

  useEffect(() => {
    const leavesContainer = leavesContainerRef.current;
    let initialTop = 0;
    let componentHeight = 0;
    let isComponentInView = false;

    // Generate random leaf positions
    const NUM_LEAVES = styles?.leaf?.count;
    for (let i = 0; i < NUM_LEAVES; i++) {
      const leaf = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      leaf.setAttribute("width", "40");
      leaf.setAttribute("height", "40");
      leaf.setAttribute("viewBox", "0 0 24 24");
      leaf.innerHTML = `
        <path d="M12 2C7 6 4 12 12 22C20 12 17 6 12 2Z" />
        <path d="M12 2C12 8 12 16 12 22" stroke="#065f46" stroke-width="0.8" stroke-linecap="round"/>
        <path d="M12 7 L9 8.5" stroke="#065f46" stroke-width="0.5" stroke-linecap="round"/>
        <path d="M12 10 L8.5 12" stroke="#065f46" stroke-width="0.5" stroke-linecap="round"/>
        <path d="M12 13 L9 15" stroke="#065f46" stroke-width="0.5" stroke-linecap="round"/>
        <path d="M12 7 L15 8.5" stroke="#065f46" stroke-width="0.5" stroke-linecap="round"/>
        <path d="M12 10 L15.5 12" stroke="#065f46" stroke-width="0.5" stroke-linecap="round"/>
        <path d="M12 13 L15 15" stroke="#065f46" stroke-width="0.5" stroke-linecap="round"/>
      `;
      leaf.style.position = "absolute";
      leaf.style.left = `${Math.random() * 100}%`;
      leaf.style.top = `${Math.random() * 100}%`;
      leaf.dataset.speed = 0.1 + Math.random() * 0.2;
      leaf.style.opacity = 0.2 + Math.random() * 0.3;
      leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
      if (styles?.leaf?.status) {
        leavesContainer.appendChild(leaf);
      }
    }

    // Initialize component position and height
    const initComponent = () => {
      const component = wrapperRef.current;
      if (component) {
        const rect = component.getBoundingClientRect();
        initialTop = rect.top + window.scrollY;
        componentHeight = rect.height;
      } else {
        console.warn("Component not found");
      }
    };

    // Run once on mount
    initComponent();

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Check if component is in view
      isComponentInView =
        currentScroll >= initialTop &&
        currentScroll <= initialTop + componentHeight;

      if (!isComponentInView) return;

      // Calculate scroll relative to component start
      const scrollY = currentScroll - initialTop;

      // Apply effects only when component is in view
      if (bgTopRef.current)
        bgTopRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      if (bgBottomRef.current)
        bgBottomRef.current.style.transform = `translateY(${scrollY * 0.08}px)`;
      if (contentRef.current)
        contentRef.current.style.transform = `translateY(${-scrollY * 0.1}px)`;
      if (imageSectionRef.current)
        imageSectionRef.current.style.transform = `translateY(${
          scrollY * 0.05
        }px)`;
      if (leftCardRef.current)
        leftCardRef.current.style.transform = `rotate(-5deg) translateY(${
          scrollY * 0.15
        }px)`;
      if (rightCardRef.current)
        rightCardRef.current.style.transform = `rotate(8deg) translateY(${
          scrollY * 0.2
        }px)`;
      if (scrollIndicatorRef.current)
        scrollIndicatorRef.current.style.opacity = Math.max(
          0,
          1 - scrollY * 0.01
        );

      Array.from(leavesContainer.children).forEach((leaf) => {
        const speed = parseFloat(leaf.dataset.speed);
        leaf.style.transform = `translateY(${scrollY * speed}px) rotate(${
          Math.random() * 360
        }deg)`;
      });
    };

    // Also handle resize to update component position
    const handleResize = () => {
      initComponent();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      // Clean up leaves if component unmounts
      if (leavesContainer) {
        leavesContainer.innerHTML = "";
      }
    };
  }, [styles?.leaf?.count, styles?.leaf?.status]);

  return (
    <>
      <div className="bplThreeImageParallax" ref={wrapperRef}>
        <div className="parallax-hero">
          {/* Background layers */}
          <div className="bg-layer bg-top" ref={bgTopRef}></div>
          <div className="bg-layer bg-bottom" ref={bgBottomRef}></div>

          {/* Leaves */}
          {styles?.leaf?.status && (
            <div id="leaves-container" ref={leavesContainerRef}></div>
          )}

          {/* Main content */}
          <div className="hero-content">
            <div className="container" ref={contentRef}>
              <div className="text-section">
                {isBackend && badge.status ? (
                  <RichText
                    tagName="div"
                    className="badge"
                    value={badge.text}
                    placeholder={__("badge text...", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(contents, value, "badge", "text"),
                      })
                    }
                  />
                ) : (
                  badge.status && <div className="badge">{badge.text}</div>
                )}
                {isBackend ? (
                  <>
                    <RichText
                      tagName="h1"
                      value={title.text}
                      placeholder={__("title...", "parallax-section")}
                      onChange={(value) =>
                        setAttributes({
                          contents: updateData(
                            contents,
                            value,
                            "title",
                            "text"
                          ),
                        })
                      }
                    />
                    <RichText
                      tagName="span"
                      className="sub-title"
                      value={subTitle.text}
                      placeholder={__("sub title...", "parallax-section")}
                      onChange={(value) =>
                        setAttributes({
                          contents: updateData(
                            contents,
                            value,
                            "subTitle",
                            "text"
                          ),
                        })
                      }
                    />
                  </>
                ) : (
                  <h1>
                    {title.text}{" "}
                    <span className="sub-title">{subTitle.text}</span>
                  </h1>
                )}

                {isBackend ? (
                  <RichText
                    tagName="p"
                    value={description.text}
                    placeholder={__("description...", "parallax-section")}
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
                ) : (
                  <p>{description.text}</p>
                )}
                <div className="buttons">
                  {btns.btn1.status && (
                    <a
                      target={options.isNewTab ? "_blank" : "_self"}
                      rel="noreferrer"
                      href={btns?.btn1.link}
                    >
                      <button className="btn  primary">
                        {btns?.btn1.text}
                        <span className="arrow">&rarr;</span>
                      </button>
                    </a>
                  )}
                  {btns.btn2.status && (
                    <a
                      target={options.isNewTab ? "_blank" : "_self"}
                      rel="noreferrer"
                      href={btns?.btn2.link}
                    >
                      <button className="btn outline">{btns.btn2.text}</button>
                    </a>
                  )}
                </div>
              </div>

              <div className="image-section" ref={imageSectionRef}>
                <div className="main-image">
                  <img
                    src={products?.fristProduct?.image}
                    alt="Sustainable products"
                  />
                </div>

                {products?.secondProduct?.status && (
                  <div className="product-card left-card" ref={leftCardRef}>
                    <div className="product-image">
                      <img src={products?.secondProduct?.image} alt="Product" />
                    </div>
                    <div className="product-text">
                      {isBackend ? (
                        <>
                          <RichText
                            className="label"
                            tagName="div"
                            value={products?.secondProduct?.title}
                            placeholder={__("title...", "parallax-section")}
                            onChange={(value) =>
                              setAttributes({
                                contents: updateData(
                                  contents,
                                  value,
                                  "products",
                                  "secondProduct",
                                  "title"
                                ),
                              })
                            }
                          />
                          <RichText
                            className="title"
                            tagName="div"
                            value={products?.secondProduct?.subTitle}
                            placeholder={__("sub title...", "parallax-section")}
                            onChange={(value) =>
                              setAttributes({
                                contents: updateData(
                                  contents,
                                  value,
                                  "products",
                                  "secondProduct",
                                  "subTitle"
                                ),
                              })
                            }
                          />
                        </>
                      ) : (
                        <>
                          <RichText.Content
                            tagName="div"
                            className="label"
                            value={products?.secondProduct?.title}
                          />
                          <RichText.Content
                            tagName="div"
                            className="title"
                            value={products?.secondProduct?.subTitle}
                          />
                        </>
                      )}
                    </div>
                  </div>
                )}

                {products?.thirdProduct?.status && (
                  <div className="product-card right-card" ref={rightCardRef}>
                    <div className="product-image">
                      <img src={products?.thirdProduct?.image} alt="Product" />
                    </div>
                    <div className="product-text">
                      {isBackend ? (
                        <>
                          <RichText
                            className="label"
                            tagName="div"
                            value={products?.thirdProduct?.title}
                            placeholder={__("title...", "parallax-section")}
                            onChange={(value) =>
                              setAttributes({
                                contents: updateData(
                                  contents,
                                  value,
                                  "products",
                                  "thirdProduct",
                                  "title"
                                ),
                              })
                            }
                          />
                          <RichText
                            className="title"
                            tagName="div"
                            value={products?.thirdProduct?.subTitle}
                            placeholder={__("sub title...", "parallax-section")}
                            onChange={(value) =>
                              setAttributes({
                                contents: updateData(
                                  contents,
                                  value,
                                  "products",
                                  "thirdProduct",
                                  "subTitle"
                                ),
                              })
                            }
                          />
                        </>
                      ) : (
                        <>
                          <RichText.Content
                            tagName="div"
                            className="label"
                            value={products?.thirdProduct?.title}
                          />
                          <RichText.Content
                            tagName="div"
                            className="title"
                            value={products?.thirdProduct?.subTitle}
                          />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeImageParallax;
