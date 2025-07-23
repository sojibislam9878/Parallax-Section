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
			link="tools.php?page=parallax-section-dashboard-pricing"
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