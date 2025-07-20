import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl, RangeControl } from '@wordpress/components';
import { pxUnit, emUnit, vhUnit } from '../../../../../../bpl-tools/utils/options';
import { SpaceControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { Label } from '../../../../../../bpl-tools/Components';


const General = ({attributes, setAttributes}) => {
  const { minHeight, padding, speed } = attributes;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "b-blocks")}
        initialOpen={true}
      >
        <UnitControl className='mt20' label={__('Min Height:', 'parallax-section')} labelPosition='left' value={minHeight} onChange={val => setAttributes({ minHeight: val })} units={[pxUnit(700), emUnit(45), vhUnit(100)]} isResetValueOnUnitChange={true} />
        
        <SpaceControl className='mt20' label={__('Padding:', 'parallax-section')} value={padding} onChange={val => setAttributes({ padding: val })} defaults={{ vertical: '20px', horizontal: '30px' }} />
        
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "b-blocks")}
        initialOpen={false}
      >
        <Label className='mb5'>{__('Speed:', 'parallax-section')}</Label>
                <RangeControl value={speed} onChange={val => setAttributes({ speed: val })} min={-1} max={1} step={.01} />
                <small>{__('0 will not perform parallax', 'parallax-section')}</small>
        

      </PanelBody>
    </>
  );
};

export default General;
