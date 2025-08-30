import { __ } from "@wordpress/i18n";
import { BControlPro } from "../../../../../bpl-tools/ProControls";
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
const FristContRow = ({ attributes, setAttributes, index, premiumProps }) => {
  const { t5Contents, options } = attributes || [];

  return (
    <div>
      <BControlPro
        value={t5Contents[index]?.image}
        label={__("Image", "parallax-section")}
        onChange={(value) =>
          setAttributes({
            t5Contents: updateData(t5Contents, value, index, "image"),
          })
        }
        Component={InlineMediaUpload}
        {...premiumProps}
      />
      <BControlPro
        className="mt10"
        value={t5Contents[index]?.title}
        label={__("Title", "parallax-section")}
        onChange={(value) =>
          setAttributes({
            t5Contents: updateData(t5Contents, value, index, "title"),
          })
        }
        Component={InputControl}
        {...premiumProps}
      />
      <BControlPro
        className="mt10"
        value={t5Contents[index]?.subtitle}
        label={__("Sub Title", "parallax-section")}
        onChange={(value) =>
          setAttributes({
            t5Contents: updateData(t5Contents, value, index, "subtitle"),
          })
        }
        Component={InputControl}
        {...premiumProps}
      />
      {options?.t5Options?.imgFullView && (
        <>
          <Flex className="mt10" justify="start" align="center" gap={2}>
            <BControlPro
              checked={t5Contents[index]?.button?.status}
              onChange={() =>
                setAttributes({
                  t5Contents: updateData(
                    t5Contents,
                    !t5Contents[index]?.button?.status,
                    index,
                    "button",
                    "status"
                  ),
                })
              }
              Component={ToggleControl}
              {...premiumProps}
            />
            <p className="mt10">Button Status</p>
          </Flex>
          {t5Contents[index]?.button?.status && (
            <>
              <BControlPro
                value={t5Contents[index]?.button?.buttonTitle}
                label={__("Button Title", "parallax-section")}
                onChange={(value) =>
                  setAttributes({
                    t5Contents: updateData(
                      t5Contents,
                      value,
                      index,
                      "button",
                      "buttonTitle"
                    ),
                  })
                }
                Component={InputControl}
                {...premiumProps}
              />
              <BControlPro
                className="mt5"
                value={t5Contents[index]?.button?.link}
                label={__("Button Title", "parallax-section")}
                onChange={(value) =>
                  setAttributes({
                    t5Contents: updateData(
                      t5Contents,
                      value,
                      index,
                      "button",
                      "link"
                    ),
                  })
                }
                Component={InputControl}
                {...premiumProps}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default FristContRow
