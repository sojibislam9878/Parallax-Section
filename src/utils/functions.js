
import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
	if (props.length === 0) {
		return value;
	}
	const [currentProp, ...remainingProps] = props;
	if (remainingProps.length === 0) {
		return produce(attr, draft => {
			draft[currentProp] = value;
		});
	}
	return produce(attr, draft => {
		if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
			draft[currentProp] = {};
		}
		draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
	});
};

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