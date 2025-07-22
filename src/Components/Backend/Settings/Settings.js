import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
// Settings Components
// import { SpaceControl } from '../../../../../bpl-tools/Components/Deprecated';
// import { Label } from '../../../../../bpl-tools/Components';
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
						{"general" === tab.name && (
							<General
								// attributes={attributes}
								// setAttributes={setAttributes}
								// device={device}
								// isPremium={isPremium}
								{...props}
							/>
						)}

						{"style" === tab.name && (
							<Style
								// attributes={attributes}
								// setAttributes={setAttributes}
								{...props}
							/>
						)}
					</>
				)}
			</TabPanel>
		</InspectorControls>
		
		<BlockControls>
			<AlignmentToolbar value={verticalAlign} onChange={val => setAttributes({ verticalAlign: val })} describedBy={__('Vertical Alignment')} alignmentControls={[
				{ title: __('Content in top', 'parallax-settings'), align: 'flex-start', icon: verticalTopIcon },
				{ title: __('Content in center', 'parallax-settings'), align: 'center', icon: verticalCenterIcon },
				{ title: __('Content in bottom', 'parallax-settings'), align: 'flex-end', icon: verticalBottomIcon }
			]} />

			<AlignmentToolbar value={textAlign} onChange={val => setAttributes({ textAlign: val })} />
		</BlockControls>
		<AboutProModal
			isProModalOpen={isProModalOpen}
			setIsProModalOpen={setIsProModalOpen}
			link="https://www.youtube.com"
		>

			<li>
				<strong>
					{__("Color: ", "mp3player-block")}
				</strong>
				{__("Add this block anywhere with shortcode.", "mp3player-block")}
			</li>
		</AboutProModal>
	</>;
};
export default Settings;