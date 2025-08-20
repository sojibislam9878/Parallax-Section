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
import {
  pxUnit,
  emUnit,
  vhUnit,
} from "../../../../../../bpl-tools/utils/options";
import { SpaceControl } from "../../../../../../bpl-tools/Components/Deprecated";
import {
  BButtonGroup,
  BoxControl,
  Device,
  InlineMediaUpload,
  Label,
} from "../../../../../../bpl-tools/Components";
import { textAlignOptions, themeOptions } from "../../../../utils/options";
import { themeChanger, updateData } from "../../../../utils/functions";
import { BControlPro } from "../../../../../../bpl-tools/ProControls";

const General = ({ attributes, setAttributes, device, premiumProps }) => {
  const {
    minHeight,
    padding,
    speed,
    selectedTheme = "default",
    contents,
    layout,
    styles,
    options,
  } = attributes;

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
              onChange={(value) =>
                setAttributes(themeChanger(value, attributes, device))
              }
            />
          </FlexBlock>
        </Flex>

        {/* for default theme  */}
        {selectedTheme === "default" && (
          <>
            <UnitControl
              className="mt20"
              label={__("Min Height:", "parallax-section")}
              labelPosition="left"
              value={minHeight}
              onChange={(val) => setAttributes({ minHeight: val })}
              units={[pxUnit(700), emUnit(45), vhUnit(100)]}
              isResetValueOnUnitChange={true}
            />

            <SpaceControl
              className="mt20"
              label={__("Padding:", "parallax-section")}
              value={padding}
              onChange={(val) => setAttributes({ padding: val })}
              defaults={{ vertical: "20px", horizontal: "30px" }}
            />
          </>
        )}

        {/* common for theme 1, 2 & 3 */}
        {selectedTheme != "default" && (
          <>
            <PanelRow>
              <Label className="mt0">
                {__("Min Height", "parallax-section")}
              </Label>
              <Device />
            </PanelRow>
            <BControlPro
              step={1}
              shiftStep={10}
              max={layout.height[device].includes("%") ? 100 : undefined}
              min={1}
              onChange={(value) =>
                setAttributes({
                  layout: updateData(layout, value, "height", device),
                })
              }
              value={layout.height[device]}
              Component={UnitControl}
              {...premiumProps}
            />

            <PanelRow>
              <Label className="mt0">{__("Width", "parallax-section")}</Label>
              <Device />
            </PanelRow>
            <BControlPro
              className="mt5"
              step={1}
              shiftStep={10}
              max={layout.width[device].includes("%") ? 100 : undefined}
              min={1}
              onChange={(value) =>
                setAttributes({
                  layout: updateData(layout, value, "width", device),
                })
              }
              value={layout.width[device]}
              Component={UnitControl}
              {...premiumProps}
            />

            <PanelRow>
              <Label className="mt0">{__("margin", "parallax-section")}</Label>
              <Device />
            </PanelRow>
            <BControlPro
              className="mt5"
              values={layout.margin[device]}
              onChange={(value) => {
                setAttributes({
                  layout: updateData(layout, value, "margin", device),
                });
              }}
              Component={BoxControl}
              {...premiumProps}
            />

            {/* only for theme 3 */}
            {selectedTheme === "theme3" && (
              <>
                <PanelRow>
                  <Label className="mt0">
                    {__("padding", "parallax-section")}
                  </Label>
                  <Device />
                </PanelRow>
                <BControlPro
                  className="mt5"
                  values={layout.padding[device]}
                  onChange={(value) => {
                    setAttributes({
                      layout: updateData(layout, value, "padding", device),
                    });
                  }}
                  Component={BoxControl}
                  {...premiumProps}
                />
              </>
            )}

            {/* only for theme 1 & theme 2 */}
            {(selectedTheme === "theme1" || selectedTheme === "theme2") && (
              <BControlPro
                value={styles?.textAlign}
                className="mt10"
                label="Text Align"
                options={textAlignOptions}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "textAlign"),
                  })
                }
                Component={BButtonGroup}
                {...premiumProps}
              />
            )}
          </>
        )}
      </PanelBody>

      {/* Contents for theme 1, 2, 3, 4 */}
      {selectedTheme != "default" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Contents", "parallax-section")}
          initialOpen={false}
        >
          {selectedTheme === "theme4" && (
            <>
              <Flex justify="start" align="center" gap={2}>
                <BControlPro
                  checked={contents?.badge?.status}
                  onChange={() =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        !contents?.badge?.status,
                        "badge",
                        "status"
                      ),
                    })
                  }
                  Component={ToggleControl}
                  {...premiumProps}
                />
                <p className="mt10">Show Badge</p>
              </Flex>
              {contents?.badge?.status && (
                <BControlPro
                  placeholder={__("badge text...", "parallax-section")}
                  className="mt5"
                  label={__("Badge Text", "parallax-section")}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "badge", "text"),
                    })
                  }
                  value={contents?.badge?.text}
                  Component={InputControl}
                  {...premiumProps}
                />
              )}
            </>
          )}

          <BControlPro
            placeholder={__("title...", "parallax-section")}
            className="mt5"
            label={__("Title", "parallax-section")}
            onChange={(value) =>
              setAttributes({
                contents: updateData(contents, value, "title", "text"),
              })
            }
            value={contents.title.text}
            Component={InputControl}
            {...premiumProps}
          />

          {(selectedTheme === "theme3" || selectedTheme === "theme4") && (
            <BControlPro
              placeholder={__("sub title...", "parallax-section")}
              className="mt5"
              label={__("Sub Title", "parallax-section")}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(contents, value, "subTitle", "text"),
                })
              }
              value={contents.subTitle.text}
              Component={InputControl}
              {...premiumProps}
            />
          )}

          <BControlPro
            placeholder={__("description...", "parallax-section")}
            className="mt5"
            label={__("Description", "parallax-section")}
            value={contents.description.text}
            onChange={(value) =>
              setAttributes({
                contents: updateData(contents, value, "description", "text"),
              })
            }
            Component={TextareaControl}
            {...premiumProps}
          />
          {selectedTheme === "theme4" && (
            <>
              <InlineMediaUpload
                label={__("Main Image", "parallax-section")}
                value={contents?.products?.fristProduct?.image}
                onChange={(value) =>
                  setAttributes({
                    contents: updateData(
                      contents,
                      value,
                      "products",
                      "fristProduct",
                      "image"
                    ),
                  })
                }
              />
              <Flex justify="start" align="center" gap={2}>
                <BControlPro
                  checked={contents?.products?.secondProduct?.status}
                  onChange={() =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        !contents?.products?.secondProduct?.status,
                        "products",
                        "secondProduct",
                        "status"
                      ),
                    })
                  }
                  Component={ToggleControl}
                  {...premiumProps}
                />
                <p className="mt10">Show left Product Card</p>
              </Flex>
              {contents?.products?.secondProduct?.status && (
                <>
                  <InlineMediaUpload
                    label={__("Left Card Image", "parallax-section")}
                    value={contents?.products?.secondProduct?.image}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "products",
                          "secondProduct",
                          "image"
                        ),
                      })
                    }
                  />
                  <BControlPro
                    placeholder={__("title...", "parallax-section")}
                    className="mt5"
                    label={__("Left card title", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "products",
                          "secondProduct",
                          "title"
                        ),
                      })
                    }
                    value={contents.products?.secondProduct.title}
                    Component={InputControl}
                    {...premiumProps}
                  />
                  <BControlPro
                    placeholder={__("sub title...", "parallax-section")}
                    className="mt5"
                    label={__("Left card sub title", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "products",
                          "secondProduct",
                          "subTitle"
                        ),
                      })
                    }
                    value={contents.products?.secondProduct.subTitle}
                    Component={InputControl}
                    {...premiumProps}
                  />
                </>
              )}

              <Flex justify="start" align="center" gap={2}>
                <BControlPro
                  checked={contents?.products?.thirdProduct?.status}
                  onChange={() =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        !contents?.products?.thirdProduct?.status,
                        "products",
                        "thirdProduct",
                        "status"
                      ),
                    })
                  }
                  Component={ToggleControl}
                  {...premiumProps}
                />
                <p className="mt10">Show left Product Card</p>
              </Flex>
              {contents?.products?.thirdProduct?.status && (
                <>
                  <InlineMediaUpload
                    label={__("Left Card Image", "parallax-section")}
                    value={contents?.products?.thirdProduct?.image}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "products",
                          "thirdProduct",
                          "image"
                        ),
                      })
                    }
                  />
                  <BControlPro
                    placeholder={__("title...", "parallax-section")}
                    className="mt5"
                    label={__("Right card title", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "products",
                          "thirdProduct",
                          "title"
                        ),
                      })
                    }
                    value={contents.products?.thirdProduct.title}
                    Component={InputControl}
                    {...premiumProps}
                  />
                  <BControlPro
                    placeholder={__("sub title...", "parallax-section")}
                    className="mt5"
                    label={__("Right card sub title", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "products",
                          "thirdProduct",
                          "subTitle"
                        ),
                      })
                    }
                    value={contents.products?.thirdProduct.subTitle}
                    Component={InputControl}
                    {...premiumProps}
                  />
                </>
              )}
            </>
          )}

          <Flex justify="start" align="center" gap={2}>
            <BControlPro
              checked={contents?.btns?.btn1?.status}
              onChange={() =>
                setAttributes({
                  contents: updateData(
                    contents,
                    !contents.btns.btn1.status,
                    "btns",
                    "btn1",
                    "status"
                  ),
                })
              }
              Component={ToggleControl}
              {...premiumProps}
            />
            <p className="mt10">
              {selectedTheme === "theme3" ? "Show Button 1" : "Show Button"}
            </p>
          </Flex>

          {contents?.btns?.btn1.status && (
            <>
              <BControlPro
                placeholder={__("button text...", "parallax-section")}
                className="mt5"
                label={__("Button Text", "parallax-section")}
                onChange={(value) =>
                  setAttributes({
                    contents: updateData(
                      contents,
                      value,
                      "btns",
                      "btn1",
                      "text"
                    ),
                  })
                }
                value={contents.btns.btn1.text}
                Component={InputControl}
                {...premiumProps}
              />

              <BControlPro
                placeholder={__("link...", "parallax-section")}
                className="mt5"
                label={__("Button Link", "parallax-section")}
                onChange={(value) =>
                  setAttributes({
                    contents: updateData(
                      contents,
                      value,
                      "btns",
                      "btn1",
                      "link"
                    ),
                  })
                }
                value={contents.btns.btn1.link}
                Component={InputControl}
                {...premiumProps}
              />

              <Flex justify="start" align="center" gap={2}>
                <BControlPro
                  checked={options.isNewTab}
                  onChange={() =>
                    setAttributes({
                      options: updateData(
                        options,
                        !options.isNewTab,
                        "isNewTab"
                      ),
                    })
                  }
                  Component={ToggleControl}
                  {...premiumProps}
                />
                <p className="mt10">Open in new tab</p>
              </Flex>
            </>
          )}

          {/* only for theme 3 (btn2) */}
          {(selectedTheme === "theme3" || selectedTheme === "theme4") && (
            <>
              <Flex justify="start" align="center" gap={2}>
                <BControlPro
                  checked={contents?.btns?.btn2.status}
                  onChange={() =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        !contents.btns.btn2.status,
                        "btns",
                        "btn2",
                        "status"
                      ),
                    })
                  }
                  Component={ToggleControl}
                  {...premiumProps}
                />
                <p className="mt10">Show Button 2</p>
              </Flex>

              {contents?.btns?.btn2.status && (
                <>
                  <BControlPro
                    placeholder={__("button text...", "parallax-section")}
                    className="mt5"
                    label={__("Button Text", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "btns",
                          "btn2",
                          "text"
                        ),
                      })
                    }
                    value={contents.btns.btn2.text}
                    Component={InputControl}
                    {...premiumProps}
                  />

                  <BControlPro
                    placeholder={__("link...", "parallax-section")}
                    className="mt5"
                    label={__("Button Link", "parallax-section")}
                    onChange={(value) =>
                      setAttributes({
                        contents: updateData(
                          contents,
                          value,
                          "btns",
                          "btn2",
                          "link"
                        ),
                      })
                    }
                    value={contents.btns.btn2.link}
                    Component={InputControl}
                    {...premiumProps}
                  />

                  <Flex justify="start" align="center" gap={2}>
                    <BControlPro
                      checked={options.isNewTab}
                      onChange={() =>
                        setAttributes({
                          options: updateData(
                            options,
                            !options.isNewTab,
                            "isNewTab"
                          ),
                        })
                      }
                      Component={ToggleControl}
                      {...premiumProps}
                    />
                    <p className="mt10">Open in new tab</p>
                  </Flex>
                </>
              )}
            </>
          )}
        </PanelBody>
      )}

      






      {selectedTheme === "default" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Options", "parallax-section")}
          initialOpen={false}
        >
          <Label className="mb5">{__("Speed:", "parallax-section")}</Label>
          <RangeControl
            value={speed}
            onChange={(val) => setAttributes({ speed: val })}
            min={-1}
            max={1}
            step={0.01}
          />
          <small>{__("0 will not perform parallax", "parallax-section")}</small>
        </PanelBody>
      )}
      {/* {selectedTheme === "theme4" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Product Cards", "parallax-section")}
          initialOpen={false}
        >
      
        </PanelBody>
      )} */}
    </>
  );
};

export default General;
