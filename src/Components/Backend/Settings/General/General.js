import { __ } from '@wordpress/i18n';
import {
  PanelBody,
  RangeControl,
  SelectControl,
  Flex,
  FlexBlock,
  __experimentalUnitControl as UnitControl,
  __experimentalInputControl as InputControl,
  TextareaControl,
  FormToggle,
  PanelRow,
} from '@wordpress/components';
import { pxUnit, emUnit, vhUnit } from '../../../../../../bpl-tools/utils/options';
import { SpaceControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { BButtonGroup, BoxControl, Device, Label } from '../../../../../../bpl-tools/Components';
import { textAlignOptions, themeOptions } from '../../../../utils/options';
import { themeChanger, updateData } from '../../../../utils/functions';


const General = ({ attributes, setAttributes, device }) => {
  const { minHeight, padding, speed, selectedTheme = "default", contents, layout, styles, options } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout Settings", "b-blocks")}
        initialOpen={true}
      >
        <Flex>
          <FlexBlock>
            <Label className="">Select A Theme</Label>
          </FlexBlock>
          <FlexBlock>
            <SelectControl
              className="mt10"
              label={""}
              value={selectedTheme}
              options={themeOptions}
              // onChange={(value) =>
              //   setAttributes(themeChanger(value, attributes, device))
              // }
              onChange={(value) => setAttributes({ selectedTheme: updateData(selectedTheme, value) })}
            />
          </FlexBlock>
        </Flex>

        {/* for default theme  */}
        {selectedTheme === "default" && <>
          <UnitControl
            className='mt20'
            label={__('Min Height:', 'parallax-section')}
            labelPosition='left' value={minHeight}
            onChange={val => setAttributes({ minHeight: val })}
            units={[pxUnit(700), emUnit(45), vhUnit(100)]}
            isResetValueOnUnitChange={true}
          />

          <SpaceControl
            className='mt20'
            label={__('Padding:', 'parallax-section')}
            value={padding}
            onChange={val => setAttributes({ padding: val })}
            defaults={{ vertical: '20px', horizontal: '30px' }}
          />
        </>
        }

        {/* common for theme 1 & 2 */}
        {
          selectedTheme != "default" && <>
            <PanelRow>
              <Label className="mt0">{__("Min Height", "section-collection")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              step={1}
              shiftStep={10}
              max={layout.height[device].includes("%") ? 100 : undefined}
              min={1}
              onChange={(value) =>
                setAttributes({ layout: updateData(layout, value, "height", device) })
              }
              value={layout.height[device]}
            />
            <PanelRow>
              <Label className="mt0">{__("Width", "section-collection")}</Label>
              <Device />
            </PanelRow>
            <UnitControl
              className="mt5"
              step={1}
              shiftStep={10}
              max={layout.width[device].includes("%") ? 100 : undefined}
              min={1}
              onChange={(value) =>
                setAttributes({ layout: updateData(layout, value, "width", device) })
              }
              value={layout.width[device]}
            />

            <PanelRow>
              <Label className="mt0">{__("margin", "section-collection")}</Label>
              <Device />
            </PanelRow>
            <BoxControl
              className="mt5"
              values={layout.margin[device]}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "margin", device),
                });
              }}
            />


            <BButtonGroup value={styles?.textAlign} className="mt10" label="Text Align" options={textAlignOptions} onChange={(value) => setAttributes({ styles: updateData(styles, value, "textAlign") })} />

            <InputControl
              placeholder={__("title...", "section-collection")}
              className="mt5"
              label={__("Title", "section-collection")}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(contents, value, "title", "text"),
                })
              }
              value={contents.title.text}
            />
            <TextareaControl
              placeholder={__("description...", "section-collection")}
              className="mt5"
              label={__("Description", "section-collection")}
              value={contents.description.text}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(contents, value, "description", "text"),
                })
              }
            />

            <Flex justify="start" align="center" gap={2}>
              <FormToggle
                checked={contents.btn.status}
                onChange={() =>
                  setAttributes({
                    contents: updateData(
                      contents,
                      !contents.btn.status,
                      "btn",
                      "status"
                    ),
                  })
                }
              />
              <p className="mt10">Show Button</p>
            </Flex>
            {contents.btn.status && (
              <>
                <InputControl
                  placeholder={__("button text...", "section-collection")}
                  className="mt5"
                  label={__("Button Text", "section-collection")}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "btn", "text"),
                    })
                  }
                  value={contents.btn.text}
                />
                <InputControl
                  placeholder={__("link...", "section-collection")}
                  className="mt5"
                  label={__("Button Link", "section-collection")}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "btn", "link"),
                    })
                  }
                  value={contents.btn.link}
                />
                <Flex justify="start" align="center" gap={2}>
                  <FormToggle
                    checked={options.isNewTab}
                    onChange={() =>
                      setAttributes({
                        options: updateData(options, !options.isNewTab, "isNewTab"),
                      })
                    }
                  />
                  <p className="mt10">Open in new tab</p>
                </Flex>
              </>
            )}
          </>
        }

      </PanelBody>

      {
        selectedTheme === "default" && <PanelBody
          className="bPlPanelBody"
          title={__("Options", "b-blocks")}
          initialOpen={false}
        >
          <Label
            className='mb5'>{__('Speed:', 'parallax-section')}
          </Label>
          <RangeControl
            value={speed}
            onChange={val => setAttributes({ speed: val })}
            min={-1}
            max={1}
            step={.01} />
          <small>{__('0 will not perform parallax', 'parallax-section')}</small>


        </PanelBody>
      }
    </>
  );
};

export default General;
