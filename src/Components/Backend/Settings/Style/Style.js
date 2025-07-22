import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, ColorControl, ColorsControl, Typography } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';
import { BControlPro } from "../../../../../../bpl-tools/ProControls";

const Style = ({ attributes, setAttributes, premiumProps }) => {
  const { background, selectedTheme, contents, styles } = attributes;

  const { title, description, btn } = contents || {}

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Parallax Style", "b-blocks")}
        initialOpen={true}
      >
        {
          selectedTheme === "default" &&
          <Background label={__('Background', 'parallax-section')} value={background} onChange={val => setAttributes({ background: val })} defaults={{ type: 'image' }} isSolid={false} />
        }

        {
          selectedTheme != "default" && <>
            <BControlPro
              label={__('Background', 'parallax-section')}
              value={styles.background}
              onChange={(value) => setAttributes({ styles: updateData(styles, value, "background") })}
              Component={Background}
              {...premiumProps}
            />

            <BControlPro
              label="Header Color"
              value={title.color}
              onChange={(value) => setAttributes({ contents: updateData(contents, value, "title", "color") })}
              Component={ColorControl}
              {...premiumProps}
            />
            <BControlPro
              label="Header Typo"
              value={title.typo}
              onChange={(value) => setAttributes({ contents: updateData(contents, value, "title", "typo") })}
              Component={Typography}
              {...premiumProps}
            />

            <BControlPro
              label="Description Color"
              value={description.color}
              onChange={(value) => setAttributes({ contents: updateData(contents, value, "description", "color") })}
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Description Typo"
              value={description.typo}
              onChange={(value) => setAttributes({ contents: updateData(contents, value, "description", "typo") })}
              Component={Typography}
              {...premiumProps}
            />

            <BControlPro
              label="Button Colors" value={btn.colors}
              onChange={(value) => setAttributes({ contents: updateData(contents, value, "btn", "colors") })}
              Component={ColorsControl}
              {...premiumProps}
            />

            <BControlPro
              label="Button Hover Colors"
              value={btn.hoverColors}
              onChange={(value) => setAttributes({ contents: updateData(contents, value, "btn", "hoverColors") })}
              Component={ColorsControl}
              {...premiumProps}
            />
          </>
        }

      </PanelBody>
    </>
  );
};

export default Style;
