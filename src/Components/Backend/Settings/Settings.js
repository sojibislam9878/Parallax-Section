import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../bpl-tools/utils/functions";
import { verticalBottomIcon, verticalCenterIcon, verticalTopIcon } from '../../../utils/icons';
import Style from './Style/Style';
import General from './General/General';
import { generalStyleTabs } from '../../../utils/options';
import { AboutProModal } from "../../../../../bpl-tools/ProControls";

const Settings = ({ attributes, setAttributes, device, isPremium}) => {
	const { verticalAlign, textAlign } = attributes;
	const [isProModalOpen, setIsProModalOpen] = useState(false);
	const premiumProps = { isPremium, setIsProModalOpen };
	const props = {
		attributes,
		setAttributes,
		premiumProps,
		device
	};

	return <>
		<InspectorControls>

			<TabPanel
				className='bPlTabPanel '
				activeClass="activeTab"
				tabs={generalStyleTabs}
				onSelect={tabController}
			>
				{(tab) => (
					<>
						{"general" === tab.name && (<General {...props} />)}

						{"style" === tab.name && ( <Style {...props} /> )}
					</>
				)}
			</TabPanel>
		</InspectorControls>
		
		<BlockControls>
			<AlignmentToolbar
				value={verticalAlign}
				onChange={val => setAttributes({ verticalAlign: val })}
				describedBy={__('Vertical Alignment')}
				alignmentControls={[
					{ title: __('Content in top', 'parallax-settings'), align: 'flex-start', icon: verticalTopIcon },
					{ title: __('Content in center', 'parallax-settings'), align: 'center', icon: verticalCenterIcon },
					{ title: __('Content in bottom', 'parallax-settings'), align: 'flex-end', icon: verticalBottomIcon }
				]}
			/>
			<AlignmentToolbar value={textAlign} onChange={val => setAttributes({ textAlign: val })} />
		</BlockControls>

		<AboutProModal
			isProModalOpen={isProModalOpen}
			setIsProModalOpen={setIsProModalOpen}
			link="tools.php?page=parallax-section-dashboard#/upgrade-to-pro"
		>
			<li>
				<strong>
					{__("Pro: ", "parallax-section")}
				</strong>
				{__("Everything in free", "parallax-section")}
			</li>
			<li>
				<strong>
					{__("Themes: ", "parallax-section")}
				</strong>
				{__("2 built-in design themes with 1 click.", "parallax-section")}
			</li>
			{/* <li>
				<strong>
					{__("Animated Cards: ", "parallax-section")}
				</strong>
				{__("Eye-catching 3D and animated card styles for an interactive user experience.", "parallax-section")}
			</li> */}
			<li>
				<strong>
					{__("Motion: ", "parallax-section")}
				</strong>
				{__("Advanced mouse movement animation for Parallax.", "parallax-section")}
			</li>
			<li>
				<strong>
					{__("Customization: ", "parallax-section")}
				</strong>
				{__("Easily customize color, font, spacing, and card behavior directly from the block editor.", "parallax-section")}
			</li>
		</AboutProModal>
	</>;
};
export default Settings;