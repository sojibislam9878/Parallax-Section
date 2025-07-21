import { __ } from '@wordpress/i18n';
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

const Settings = ({ attributes, setAttributes, device}) => {
	const {  verticalAlign, textAlign } = attributes;

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
								attributes={attributes}
								setAttributes={setAttributes}
								device={device}
							/>
						)}

						{"style" === tab.name && (
							<Style attributes={attributes} setAttributes={setAttributes} />
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
	</>;
};
export default Settings;