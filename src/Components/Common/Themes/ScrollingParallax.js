import { useEffect, useRef, useState } from "react";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { updateData } from "../../../utils/functions";

const ScrollingParallax = ({
  attributes,
  setAttributes,
  isBackend = false,
}) => {
  const t5Contents = attributes?.t5Contents || {};
  const contentRow = t5Contents || [];
  const containerRef = useRef(null);
  const rowRefs = useRef([]);
  const initialTopRef = useRef(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const fullView = false;

  // 👉 Utility: split array into 3 chunks
  const chunkArray = (arr, chunkCount) => {
    const perChunk = Math.ceil(arr.length / chunkCount);
    return Array.from({ length: chunkCount }, (_, i) =>
      arr.slice(i * perChunk, (i + 1) * perChunk)
    );
  };

  const contentRows = chunkArray(contentRow, 3);
  if (contentRows[1]) contentRows[1] = [...contentRows[1]].reverse();

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      initialTopRef.current = rect.top + window.scrollY;

      // 👉 measure each row’s width for offset (especially for reversed rows)
      rowRefs.current.forEach((row, index) => {
        if (!row) return;
        if (index === 1) {
          // shift so reversed row starts aligned from the right edge
          const containerWidth = containerRef.current.offsetWidth;
          row.dataset.offset = -(row.scrollWidth - containerWidth);
          row.style.transform = `translateX(${row.dataset.offset}px)`;
        } else {
          row.dataset.offset = 0;
          row.style.transform = `translateX(0px)`;
        }
      });
    };

    measure();
    const afterTick = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    const handleScroll = () => {
      if (!containerRef.current) return;
      let relativeScroll = window.scrollY - initialTopRef.current;
      if (relativeScroll < 0) {
        rowRefs.current.forEach((row) => {
          if (!row) return;
          const offset = parseFloat(row?.dataset?.offset || "0");
          row.style.transform = `translateX(${offset}px)`;
        });
        return;
      }

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const direction = parseFloat(row.dataset.direction);
        const offset = parseFloat(row.dataset.offset || "0");
        const speed = 0.5;
        row.style.transform = `translateX(${
          offset + relativeScroll * speed * direction
        }px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(afterTick);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="main-container" className="bplScrolingParallax" ref={containerRef}>
      <div>
        {contentRows.map((rowItems = [], rowIndex) => {
          const items = [...rowItems, ...rowItems];
          const direction = rowIndex % 2 === 0 ? -1 : 1;
          const offset = rowIndex === 1 ? -400 : 400;

          return (
            <div
              key={rowIndex}
              className="parallax-row"
              data-direction={direction}
              data-offset={offset}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
              style={{ transform: `translateX(${offset}px)` }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="card cursor-pointer"
                  onClick={() => fullView && setSelectedCard(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="card-content">
                    {isBackend ? (
                      <>
                        <RichText
                          tagName="h3"
                          value={item.title}
                          onChange={(value) =>
                            setAttributes({
                              t5Contents: updateData(
                                t5Contents,
                                value,
                                i,
                                "title"
                              ),
                            })
                          }
                        />
                        <RichText
                          tagName="p"
                          value={item.subtitle}
                          onChange={(value) =>
                            setAttributes({
                              t5Contents: updateData(
                                t5Contents,
                                value,
                                i,
                                "subtitle"
                              ),
                            })
                          }
                        />
                      </>
                    ) : (
                      <>
                        <h3>{item.title}</h3>
                        <p>{item.subtitle}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {selectedCard && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button
              onClick={() => setSelectedCard(null)}
              className="modal-close"
            >
              ✕
            </button>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="modal-image"
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="modal-text">
                <h2>{selectedCard.title}</h2>
                <p>{selectedCard.subtitle}</p>
              </div>
              <button style={{ height: "100px" }}>hello world</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollingParallax;
