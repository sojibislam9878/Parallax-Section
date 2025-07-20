import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useRef } from 'react';


import { tabController } from '../../../../bpl-tools/utils/functions';

import { parallaxInit } from '../../utils/functions';
import Style from '../Common/Style';
import BlurEffectParallax from '../Common/Themes/BlurEffectParallax';
import Settings from './Settings/Settings';

const Edit = props => {
	const {attributes, setAttributes, isSelected } = props;
	const { speed } = attributes;
	const blockProps = useBlockProps();

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
			<Settings attributes={attributes} setAttributes={setAttributes} />

			<div {...blockProps}>
				<Style attributes={attributes} id={blockProps.id} />

				{/* <DefultParallax speed={speed} parallaxImgEl={parallaxImgEl} /> */}
				<BlurEffectParallax {...{ form, attributes, setAttributes }} />
			</div >

		</>
	);
};
export default Edit;