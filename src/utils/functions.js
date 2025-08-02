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
}

export const parallaxInit = (el, parentEl, scrollTop = false) => {
	const speed = parseFloat(el?.dataset?.speed) || -1;
	const windowScrollY = scrollTop || window.scrollY;
	const windowHeight = window.innerHeight;
	const parentHeight = parentEl?.clientHeight;
	const parentOffsetTop = parentEl?.offsetTop;
	const winBottom = windowScrollY + windowHeight;
	if (winBottom > parentOffsetTop && windowScrollY < parentOffsetTop + parentHeight) {
		const imgBottom = ((winBottom - parentOffsetTop) * speed);
		const imgTop = windowHeight + parentHeight;
		let imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
		el.style.top = imgPercent + '%';
		el.style.transform = 'translate(-50%, -' + imgPercent + '%)';
	}
}


export const themeChanger = (theme = "theme1", attributes) =>

	produce(attributes, (draft) => {
		draft["selectedTheme"] = theme;
		switch (theme) {
			//======================= case for theme 1 ========================//
			case "theme1":
				// draft["styles"]["background"]["image"]["url"] ="https://templates.bplugins.com/wp-content/uploads/2025/05/blureffectparallax-scaled.jpeg",
				draft["contents"]["title"]["color"] ="#2d2d2d",
				draft["styles"]["textAlign"] ="left"
				break;

			//====================== case for theme 2 ===============================//

			case "theme2":
				// draft["styles"]["background"]["image"]["url"] = "https://templates.bplugins.com/wp-content/uploads/2025/05/Screenshot-2025-05-17-105053.png",
				draft["contents"]["title"]["color"] = "#fff",
				draft["styles"]["textAlign"] = "center"
				break;

			//====================== case for theme 3 ===============================//

			case "theme3":
				// draft["styles"]["background"]["image"]["url"] = "https://templates.bplugins.com/wp-content/uploads/2025/05/Screenshot-2025-05-17-105053.png",
				draft["contents"]["title"]["color"] ="linear-gradient(to right, #38bdf8, #34d399)";
				break;

			default:
				break;
		}
	});