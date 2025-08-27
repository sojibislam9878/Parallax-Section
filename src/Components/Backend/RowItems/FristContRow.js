import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  RangeControl,
  SelectControl,
  Flex,
  FlexBlock,
  __experimentalUnitControl as UnitControl,
  __experimentalInputControl as InputControl,
  TextareaControl,
  ToggleControl,
  PanelRow,
} from "@wordpress/components";
import { InlineMediaUpload } from "../../../../../bpl-tools/Components";
import { updateData } from "../../../utils/functions";
const FristContRow = ({
  attributes,
  setAttributes,
  index,
}) => {
  const {t5Contents} = attributes || []
  return (
    <div>
      <InlineMediaUpload
        value={t5Contents[index]?.image}
        label={__("Image", "parallax-section")}
        onChange={(value) =>
          setAttributes({
            t5Contents: updateData(t5Contents, value, index, "image"),
          })
        }
      />
      <InputControl
        className="mt10"
        value={t5Contents[index]?.title}
        label={__("Title", "parallax-section")}
        onChange={(value) =>
          setAttributes({
            t5Contents: updateData(t5Contents, value, index, "title"),
          })
        }
      />
      <InputControl
        className="mt10"
        value={t5Contents[index]?.subtitle}
        label={__("Sub Title", "parallax-section")}
        onChange={(value) =>
          setAttributes({
            t5Contents: updateData(t5Contents, value, index, "subtitle"),
          })
        }
      />
    </div>
  );
};

export default FristContRow
