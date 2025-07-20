import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import './editor.scss';
import { parallaxIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: parallaxIcon,
	
	edit: Edit,

	save: () => <InnerBlocks.Content />
});