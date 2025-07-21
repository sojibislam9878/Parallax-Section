import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { Background, ColorControl, ColorsControl, Typography } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';

const Style = ({ attributes, setAttributes }) => {
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
            <Background value={styles.background} onChange={(value) => setAttributes({ styles: updateData(styles, value, "background") })} />

            <ColorControl label="Header Color" value={title.color} onChange={(value) => setAttributes({ contents: updateData(contents, value, "title", "color") })} />
            <Typography label="Header Typo" value={title.typo} onChange={(value) => setAttributes({ contents: updateData(contents, value, "title", "typo") })} />

            <ColorControl label="Description Color" value={description.color} onChange={(value) => setAttributes({ contents: updateData(contents, value, "description", "color") })} />
            <Typography label="Description Typo" value={description.typo} onChange={(value) => setAttributes({ contents: updateData(contents, value, "description", "typo") })} />

            <ColorsControl label="Button Colors" value={btn.colors} onChange={(value) => setAttributes({ contents: updateData(contents, value, "btn", "colors") })} />
            <ColorsControl label="Button Hover Colors" value={btn.hoverColors} onChange={(value) => setAttributes({ contents: updateData(contents, value, "btn", "hoverColors") })} />
          </>
        }

      </PanelBody>
    </>
  );
};

export default Style;
