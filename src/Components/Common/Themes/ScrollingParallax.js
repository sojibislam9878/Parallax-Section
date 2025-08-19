"use client";

import { useEffect, useRef } from "react";

const ScrollingParallax = () => {
  // 👉 In production, fetch contentRows from DB instead of hardcoding
  const contentRows = [
    [
      {
        title: "PACHINKO",
        subtitle: "Apple TV+",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/07/41475.jpg",
      },
      {
        title: "USHER",
        subtitle: "Apple Music",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/07/coffee-cup-scaled.jpg",
      },
      {
        title: "บลิงก์ ทวิช",
        subtitle: "Streaming",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-46.jpg",
      },
      {
        title: "PRESUMED INNOCENT",
        subtitle: "Apple TV+",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-38.jpg",
      },
      {
        title: "ดินแดนโจรสลัด",
        subtitle: "Adventure",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-29.jpg",
      },
      {
        title: "PHOENIX",
        subtitle: "Action",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-32.jpg",
      },
    ],
    [
      {
        title: "Jennifer Lopez",
        subtitle: "Apple Music",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/07/41475.jpg",
      },
      {
        title: "ANGRY BIRDS RELOADED",
        subtitle: "Apple Arcade",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/07/coffee-cup-scaled.jpg",
      },
      {
        title: "พรีเดเตอร์",
        subtitle: "Action Movie",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-46.jpg",
      },
      {
        title: "Ice Spice",
        subtitle: "Apple Music",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-38.jpg",
      },
      {
        title: "DREAMLIGHT VALLEY",
        subtitle: "Apple Arcade",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-62.jpg",
      },
      {
        title: "BAD BOYS",
        subtitle: "Action Movie",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-32.jpg",
      },
    ],
    [
      {
        title: "IT ENDS WITH US",
        subtitle: "Drama",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/07/41475.jpg",
      },
      {
        title: "โค่นอสูรป่วนเมือง",
        subtitle: "Action",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/07/coffee-cup-scaled.jpg",
      },
      {
        title: "บิดาสาม",
        subtitle: "Thai Movie",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-46.jpg",
      },
      {
        title: "TOM & JERRY",
        subtitle: "Apple Arcade",
        image:
          "https://templates.bplugins.com/wp-content/uploads/2025/02/n-38.jpg",
      },
      {
        title: "SILO",
        subtitle: "Apple TV+",
        image:"https://templates.bplugins.com/wp-content/uploads/2025/02/n-62.jpg",
      },
      {
        title: "MUSIC",
        subtitle: "Apple Music",
        image: "https://templates.bplugins.com/wp-content/uploads/2025/02/n-32.jpg",
      },
    ],
  ];

  const rowRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      rowRefs.current.forEach((row) => {
        if (!row) return;
        const direction = parseFloat(row.dataset.direction);
        const offset = parseFloat(row.dataset.offset || "0");
        const speed = 0.5;
        row.style.transform = `translateX(${
          offset + scrollY * speed * direction
        }px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bplScrolingParallax">
      <div className="" >
        {contentRows.map((rowItems, rowIndex) => {
          // Duplicate for seamless loop
          const items = [...rowItems, ...rowItems];
          const direction = rowIndex % 2 === 0 ? -1 : 1;
          const offset = rowIndex === 1 ? -400 : 0;

          return (
            <div
              key={rowIndex}
              className="parallax-row"
              data-direction={direction}
              data-offset={offset}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {items.map((item, i) => (
                <div key={i} className="card">
                  <img src={item.image} alt={item.title} />
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      
      {/* Footer */}
      {/* <div className="footer">
        <div>
          <h2>Keep Scrolling</h2>
          <p>The parallax effect continues as you scroll</p>
        </div>
      </div> */}
    </div>
  );
};

export default ScrollingParallax;
