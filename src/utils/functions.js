
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

	// The next pixel to show on screen
	// const parentOffsetTop = parentEl?.scrollHeight; // User demand obergagi@gmail.com
	const winBottom = windowScrollY + windowHeight;

	// If block is shown on screen
	if (winBottom > parentOffsetTop && windowScrollY < parentOffsetTop + parentHeight) {
		// Number of pixels shown after block appear
		const imgBottom = ((winBottom - parentOffsetTop) * speed);
		// Max number of pixels until block disappear
		const imgTop = windowHeight + parentHeight;
		// Percentage between start showing until disappearing
		let imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));

		// Set the style
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
				// draft["subSections"] = [
				// 	{
				// 		"title": "Unleash Your Your <span> Inner Warrior </span>",
				// 		"description": "Join the battle and conquer the arena with unmatched skill and strategy.",
				// 		"gradient": "linear-gradient(227deg,#1400c7 0%,#00bbff 100%)",
				// 		"startPosition": {
				// 			"X": "",
				// 			"Y": ""
				// 		},
				// 		"image": "https://templates.bplugins.com/wp-content/uploads/2025/06/img-1.avif"
				// 	},
				// 	{
				// 		"title": "Embark on Your <span> Legendary journey </span>",
				// 		"description": "Immerse Yourself in a World Where Legends Clash And Heros Rise to Glory",
				// 		"gradient": "linear-gradient(227deg, #28dc28 0%, #00bbff 100%)",
				// 		"startPosition": {
				// 			"X": "-35",
				// 			"Y": "30",
				// 			"opacity": 0.5
				// 		},
				// 		"image": "https://templates.bplugins.com/wp-content/uploads/2025/06/img-2.avif"
				// 	},
				// 	{
				// 		"title": "Master the <span> Art of Magic </span>",
				// 		"description": "Harness powerful spells and enchantments to dominate your foes and change the course of battle.",
				// 		"gradient": "linear-gradient(227deg, #1400c7 0%, #b800b1 100%)",
				// 		"startPosition": {
				// 			"X": "0",
				// 			"Y": "50",
				// 			"opacity": 0.5
				// 		},
				// 		"image": "https://templates.bplugins.com/wp-content/uploads/2025/06/img-3.avif"
				// 	},
				// 	{
				// 		"title": "Rise as the <span> Champion </span>",
				// 		"description": "Lead your team to victory with unparalleled strength and unwavering determination.",
				// 		"gradient": "linear-gradient(227deg, #b800b1 0%, #f50000 100%)",
				// 		"startPosition": {
				// 			"X": "45",
				// 			"Y": "40",
				// 			"opacity": 0.5
				// 		},
				// 		"image": "https://templates.bplugins.com/wp-content/uploads/2025/06/img-4.avif"
				// 	}
				// ];

				break;

			//====================== case for theme 2 ===============================//

			case "theme2":

				break;

			default:
				break;
		}
	});