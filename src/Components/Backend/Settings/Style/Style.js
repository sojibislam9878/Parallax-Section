import { __ } from '@wordpress/i18n';
import { Flex, FlexItem, GradientPicker, PanelBody, __experimentalNumberControl as NumberControl, FlexBlock } from '@wordpress/components';
import { Background, ColorControl, ColorsControl, Label, Typography } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';
import { BControlPro } from "../../../../../../bpl-tools/ProControls";

const Style = ({ attributes, setAttributes, premiumProps }) => {
  const { background, selectedTheme, contents, styles } = attributes;
  const { title, description, btns, subTitle } = contents || {};
  const { particles } = styles || {};
  const { btn1, btn2 } = btns || {};
  

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Parallax Style", "b-blocks")}
        initialOpen={true}
      >
        {selectedTheme === "default" && (
          <Background
            label={__("Background", "parallax-section")}
            value={background}
            onChange={(val) => setAttributes({ background: val })}
            defaults={{ type: "image" }}
            isSolid={false}
          />
        )}

        {selectedTheme != "default" && (
          <>
            <BControlPro
              label={__("Background", "parallax-section")}
              value={styles.background}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "background"),
                })
              }
              Component={Background}
              {...premiumProps}
            />

            {(selectedTheme === "theme1" || selectedTheme === "theme2") && (
              <>
                <BControlPro
                  label="Header Color"
                  value={title.color}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "title", "color"),
                    })
                  }
                  Component={ColorControl}
                  {...premiumProps}
                />

                <BControlPro
                  label="Header Typo"
                  value={title.typo}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "title", "typo"),
                    })
                  }
                  Component={Typography}
                  {...premiumProps}
                />
              </>
            )}

            {selectedTheme === "theme3" && (
              <>
                <Label className="mt0">Title Color</Label>
                <BControlPro
                  value={title.color}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "title", "color"),
                    })
                  }
                  Component={GradientPicker}
                  {...premiumProps}
                />
                <BControlPro
                  label="Sub Title Color"
                  value={subTitle.color}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        value,
                        "subTitle",
                        "color"
                      ),
                    })
                  }
                  Component={ColorControl}
                  {...premiumProps}
                />
              </>
            )}

            <BControlPro
              label="Description Color"
              value={description.color}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(contents, value, "description", "color"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Description Typo"
              value={description.typo}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(contents, value, "description", "typo"),
                })
              }
              Component={Typography}
              {...premiumProps}
            />

            <BControlPro
              label="Button Colors"
              value={btn1.colors}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(
                    contents,
                    value,
                    "btns",
                    "btn1",
                    "colors"
                  ),
                })
              }
              Component={ColorsControl}
              {...premiumProps}
            />

            <BControlPro
              label="Button Hover Colors"
              value={btn1.hoverColors}
              onChange={(value) =>
                setAttributes({
                  contents: updateData(
                    contents,
                    value,
                    "btns",
                    "btn1",
                    "hoverColors"
                  ),
                })
              }
              Component={ColorsControl}
              {...premiumProps}
            />
            {selectedTheme === "theme3" && (
              <>
                <BControlPro
                  label="Button 2 Colors"
                  value={btn2.colors}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        value,
                        "btns",
                        "btn2",
                        "colors"
                      ),
                    })
                  }
                  Component={ColorsControl}
                  {...premiumProps}
                />

                <BControlPro
                  label="Button 2 Hover Colors"
                  value={btn2.hoverColors}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(
                        contents,
                        value,
                        "btns",
                        "btn2",
                        "hoverColors"
                      ),
                    })
                  }
                  Component={ColorsControl}
                  {...premiumProps}
                />
              </>
            )}
          </>
        )}
      </PanelBody>
      {selectedTheme === "theme3" && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Particles Style", "b-blocks")}
            initialOpen={false}
          >
            <Label>Color</Label>
            <Flex>
              <FlexBlock>R :</FlexBlock>
              <FlexBlock>
                <NumberControl
                  value={particles.color.r}
                  max={255}
                  min={0}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "particles",
                        "color",
                        "r"
                      ),
                    })
                  }
                />
              </FlexBlock>
            </Flex>
            <Flex>
              <FlexBlock>G :</FlexBlock>
              <FlexBlock>
                <NumberControl
                  value={particles.color.g}
                  max={255}
                  min={0}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "particles",
                        "color",
                        "g"
                      ),
                    })
                  }
                />
              </FlexBlock>
            </Flex>
            <Flex>
              <FlexBlock>B :</FlexBlock>
              <FlexBlock>
                <NumberControl
                  value={particles.color.b}
                  max={255}
                  min={0}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "particles",
                        "color",
                        "b"
                      ),
                    })
                  }
                />
              </FlexBlock>
            </Flex>

            {/* speed */}
            <Flex className="mt10">
              <FlexBlock>Moving Speed</FlexBlock>
              <FlexBlock>
                <NumberControl
                  value={particles.movingSpeed}
                  max={2}
                  min={0.1}
                  step={0.1}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "particles",
                        "movingSpeed"
                      ),
                    })
                  }
                />
              </FlexBlock>
            </Flex>

            {/* density */}
            <Flex className="mt10">
              <FlexBlock>density</FlexBlock>
              <FlexBlock>
                <NumberControl
                  value={particles.density}
                  max={50}
                  min={1}
                  step={1}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(styles, value, "particles","density"),
                    })
                  }
                />
              </FlexBlock>
            </Flex>
          </PanelBody>
        </>
      )}
    </>
  );
};

export default Style;
