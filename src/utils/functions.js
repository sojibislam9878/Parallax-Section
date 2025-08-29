import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, (draft) => {
      if (
        Array.isArray(draft[currentProp]) &&
        (draft === null || draft === undefined)
      ) {
        draft = {};
      }
      draft[currentProp] = value;
    });
  }
  return produce(attr, (draft) => {
    if (draft === null || draft === undefined) {
      draft = {};
    }
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(
      draft[currentProp],
      value,
      ...remainingProps
    );
  });
};

export const parallaxInit = (el, parentEl, scrollTop = false) => {
  const speed = parseFloat(el?.dataset?.speed) || -1;
  const windowScrollY = scrollTop || window.scrollY;
  const windowHeight = window.innerHeight;
  const parentHeight = parentEl?.clientHeight;
  const parentOffsetTop = parentEl?.offsetTop;
  const winBottom = windowScrollY + windowHeight;
  if (
    winBottom > parentOffsetTop &&
    windowScrollY < parentOffsetTop + parentHeight
  ) {
    const imgBottom = (winBottom - parentOffsetTop) * speed;
    const imgTop = windowHeight + parentHeight;
    let imgPercent = (imgBottom / imgTop) * 100 + (50 - speed * 50);
    el.style.top = imgPercent + "%";
    el.style.transform = "translate(-50%, -" + imgPercent + "%)";
  }
};

export const themeChanger = (theme = "theme1", attributes) =>
  produce(attributes, (draft) => {
    draft["selectedTheme"] = theme;
    switch (theme) {
      //======================= case for theme 1 ========================//
      case "theme1":
				// draft["styles"]["background"]["image"]["url"] ="https://templates.bplugins.com/wp-content/uploads/2025/05/blureffectparallax-scaled.jpeg",
				(draft["styles"]["background"]["type"] = "image"),
          (draft["contents"]["title"]["color"] = "#2d2d2d"),
          (draft["contents"]["description"]["color"] = "white"),
          (draft["styles"]["textAlign"] = "left");
          draft["contents"]["btns"]["btn1"]["colors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["colors"]["bg"] = "#ff4757";
          draft["contents"]["btns"]["btn1"]["hoverColors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["hoverColors"]["bg"] = "#ff6b81";
        break;

      //====================== case for theme 2 ===============================//

      case "theme2":
				// draft["styles"]["background"]["image"]["url"] = "https://templates.bplugins.com/wp-content/uploads/2025/05/Screenshot-2025-05-17-105053.png",
				
        (draft["styles"]["background"]["type"] = "image"),
          (draft["contents"]["title"]["color"] = "#fff"),
          (draft["contents"]["description"]["color"] = "white"),
          (draft["styles"]["textAlign"] = "center");
          draft["contents"]["btns"]["btn1"]["colors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["colors"]["bg"] = "#ff4757";
          draft["contents"]["btns"]["btn1"]["hoverColors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["hoverColors"]["bg"] = "#ff6b81";
        break;

      //====================== case for theme 3 ===============================//

      case "theme3":
        // draft["styles"]["background"]["image"]["url"] = "https://templates.bplugins.com/wp-content/uploads/2025/05/Screenshot-2025-05-17-105053.png",
        (draft["styles"]["background"]["type"] = "gradient"),
          (draft["contents"]["title"]["color"] =
            "linear-gradient(to right, #38bdf8, #34d399)"),
          (draft["contents"]["subTitle"]["color"] = "white");
          (draft["contents"]["description"]["color"] = "white");
          draft["contents"]["btns"]["btn1"]["colors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["colors"]["bg"] =
            "linear-gradient(to right, #38bdf8, #34d399)";
						draft["contents"]["btns"]["btn1"]["hoverColors"]["color"] = "white";
            draft["contents"]["btns"]["btn1"]["hoverColors"]["bg"] =
              "linear-gradient(to right, #0ea5e9, #10b981)";
          draft["contents"]["btns"]["btn2"]["colors"]["color"] = "white";
          draft["contents"]["btns"]["btn2"]["colors"]["bg"] = "transparent";
					draft["contents"]["btns"]["btn2"]["hoverColors"]["color"] = "white";
          draft["contents"]["btns"]["btn2"]["hoverColors"]["bg"] =" rgba(255, 255, 255, 0.05)";
        break;

			case "theme4":
          (draft["contents"]["title"]["color"] = "#111827"),
            (draft["contents"]["description"]["color"] = "#4b5563");
          draft["contents"]["subTitle"]["color"] = "#16a34a";
          draft["contents"]["btns"]["btn1"]["colors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["colors"]["bg"] = "#16a34a";
					draft["contents"]["btns"]["btn1"]["hoverColors"]["color"] = "white";
          draft["contents"]["btns"]["btn1"]["hoverColors"]["bg"] = "#15803d";
          draft["contents"]["btns"]["btn2"]["colors"]["color"] = "#16a34a";
          draft["contents"]["btns"]["btn2"]["colors"]["bg"] = "transparent";
					draft["contents"]["btns"]["btn2"]["hoverColors"]["color"] = "#16a34a";
          draft["contents"]["btns"]["btn2"]["hoverColors"]["bg"] = "#f0fdf4";
        break;

			case "theme5":
				(draft["styles"]["background"]["type"] = "solid"),
          (draft["contents"]["title"]["color"] = "#fff"),
          (draft["contents"]["description"]["color"] = "#FFFFFFCC");
        break;

      default:
        break;
    }
  });
