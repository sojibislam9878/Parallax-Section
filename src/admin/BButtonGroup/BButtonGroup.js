import { useEffect, useRef, useState } from "react";
/**
 * BButtonGroup Component
 * 
 * @param {object} props - The props object
 * @param {array} props.options - The options for the button group
 * @param {string} props.label - The label for the button group
 * @param {string} props.value - The value of the button group
 * @param {function} props.onChange - The function to handle changes in the button group value
 * @param {string} props.borderRadius - The border radius for the button group
 * @param {string} props.height - The height of the button group
 * @param {string} props.paddingX - The horizontal padding for the buttons
 * @param {string} props.paddingY - The vertical padding for the buttons
 * @param {string} props.fontSize - The font size for the buttons
 * @param {number} props.fontWeight - The font weight for the buttons
 * @param {string} props.activeBg - The background color for the active button
 * @param {string} props.activeColor - The text color for the active button
 * @param {string} props.inactiveColor - The text color for the inactive buttons
 * @param {string} props.hoverBg - The background color for the buttons on hover
 * @param {string} props.hoverColor - The text color for the buttons on hover
 * @param {object} props.style - The style object for the button group
 * @returns {JSX.Element} React component
 */

const BButtonGroup = (props) => {
	const { className = '', options = [], label = "Button Group", value, onChange = () => { }, borderRadius = "30px", height, paddingX = "8px", paddingY = "4px", fontSize = "12px", fontWeight = 400, activeBg, activeColor = "#fff", inactiveColor = "#000", hoverBg, hoverColor, style, } = props;
	const [activeButton, setActiveButton] = useState(0);

	const btnOptions = options.length > 0 ? options : [1, 2];

	const btnRef = useRef(null);
	const bgSlideRef = useRef(null);
	const uniqId = Math.floor(Math.random() * 99999999);
	useEffect(() => {
		const activeIndex = activeButton > options.length - 1 ? activeButton - 1 : activeButton
		const btnWrapper = btnRef.current;
		const bdSlide = bgSlideRef.current;
		if (value) {
			btnOptions.forEach((v, i) => {
				if (v.value === value) {
					setActiveButton(i);
				}
			});
		}

		const btns = btnWrapper.querySelectorAll(`.bpl-button-group-${uniqId}`);
		const singleBtn = Array.from(btns)[activeIndex];
		// const leftValue = Array.from(btns)[activeButton === 0 ? activeButton : activeButton - 1].getBoundingClientRect().width.toFixed(2)
		const boundingHeight = singleBtn.getBoundingClientRect().height.toFixed(2);
		const boundingWidth = singleBtn.getBoundingClientRect().width.toFixed(2);
		const width = Number(boundingWidth);
		const height = Number(boundingHeight);

		bdSlide.style.width = `${width || singleBtn.clientWidth}px`;
		bdSlide.style.height = `${height || singleBtn.clientHeight}px`;
		// bdSlide.style.left = `${activeButton * leftValue}px`;
		bdSlide.style.left = `${singleBtn.offsetLeft}px`;
	}, [activeButton, options, value]);

	const handleSetValue = (e, option, i) => {
		setActiveButton(i);
		onChange(option.value);
	};

	return (
		<div className={className} style={{ marginBottom: "10px", ...style }}>

			<div >
				{label && <label>{label}</label>}
				<div ref={btnRef}
					style={{
						display: "flex"
					}}
				>
					{btnOptions.map((option, i) => (
						<button key={i} onClick={(e) => handleSetValue(e, option, i)}
							className={`bpl-button bpl-button-group-${uniqId} ${activeButton === i ? 'bpl-button-active' : ''}`}
						> {options.length ? option.label : "Button " + (i + 1)}
						</button>
					))}
					<div
						ref={bgSlideRef}

					></div>
				</div>
			</div>
		</div>
	);
};
export default BButtonGroup;