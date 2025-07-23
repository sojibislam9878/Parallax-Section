import Style from '../Common/Style';
import BlurEffectParallax from '../Common/Themes/BlurEffectParallax';
import VerticalParallax from "../Common/Themes/VerticalParallax";
import DefultParallax from "../Common/Themes/DefultParallax";
import Settings from './Settings/Settings';
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from 'react';
import { withSelect } from "@wordpress/data";
import { tabController } from '../../../../bpl-tools/utils/functions';
import { parallaxInit } from '../../utils/functions';
import { usePremiumInEditor } from "../../../../bpl-tools/hooks";

const Edit = props => {
	const {attributes, setAttributes, isSelected, device} = props;
	const { speed, selectedTheme = "default" } = attributes;
	const blockProps = useBlockProps();
	const { isPremium } = usePremiumInEditor("ssbUtils", "ssbPremiumChecker");
	
	useEffect(() => tabController(), [isSelected]);

	const parallaxImgEl = useRef(null);
	useEffect(() => {
		if (parallaxImgEl?.current) {
				parallaxInit(parallaxImgEl.current, parallaxImgEl.current.parentElement);
				document.addEventListener('scroll', () => {
				parallaxInit(parallaxImgEl.current, parallaxImgEl.current.parentElement);
				});
		}
	}, [parallaxImgEl?.current, speed]);

	// =============================================================== //

	const form = "server"
	return (
		<>
			<Settings {...{attributes, setAttributes, device, isPremium}} />
			
			<div {...blockProps}>

				<Style attributes={attributes} id={blockProps.id} />

					{
						selectedTheme === "default" ? <DefultParallax speed={speed} parallaxImgEl={parallaxImgEl} /> : selectedTheme === "theme1" ? <BlurEffectParallax {...{ form, attributes, setAttributes }} /> : selectedTheme === "theme2" ? <VerticalParallax {...{ form, attributes, setAttributes }} /> : ""
					}
			</div >
		</>
	);
};
export default withSelect((select) => {
	const { getDeviceType } = select('core/editor');
	return {
		device: getDeviceType()?.toLowerCase(),
	};
})(Edit);