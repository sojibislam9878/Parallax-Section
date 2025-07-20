import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background } from '../../../../../../bpl-tools/Components';

const Style = ({attributes, setAttributes}) => {
  const {background } = attributes;

  return (
    <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__("Parallax Style", "b-blocks")}
        initialOpen={true}
      >
        <Background label={__('Background', 'parallax-section')} value={background} onChange={val => setAttributes({ background: val })} defaults={{ type: 'image' }} isSolid={false} />
        
      </PanelBody>
    </>
  );
};

export default Style;
