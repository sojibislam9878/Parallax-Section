import { __ } from "@wordpress/i18n";
import {
  Flex,
  GradientPicker,
  PanelBody,
  __experimentalNumberControl as NumberControl,
  FlexBlock,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
  PanelRow,
  // __experimentalInputControl as InputControl,
} from "@wordpress/components";
import {
  Background,
  ColorControl,
  ColorsControl,
  Device,
  Label,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";
import { BControlPro } from "../../../../../../bpl-tools/ProControls";

const Style = ({ attributes, setAttributes, premiumProps, device }) => {
  const { background, selectedTheme, contents, styles, options } = attributes;
  const { title, description, btns, subTitle, badge } = contents || {};
  const { particles, cube, leaf, t4Styles,t5Styles } = styles || {};
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
            {selectedTheme != "theme4" ? (
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
            ) : (
              <>
                <Label>Background Colors:</Label>
                <ColorControl
                  label="Upper Background Color"
                  value={t4Styles?.backgroundColors?.upper}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "t4Styles",
                        "backgroundColors",
                        "upper"
                      ),
                    })
                  }
                />
                <ColorControl
                  label="Lower Background Color"
                  value={t4Styles?.backgroundColors?.lower}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(
                        styles,
                        value,
                        "t4Styles",
                        "backgroundColors",
                        "lower"
                      ),
                    })
                  }
                />
              </>
            )}

            {(selectedTheme === "theme1" ||
              selectedTheme === "theme2" ||
              selectedTheme === "theme5") && (
              <>
                <BControlPro
                  label="Title Color"
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
                  label="Title Typo"
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
                  label="Title Typo"
                  value={title.typo}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "title", "typo"),
                    })
                  }
                  Component={Typography}
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
                <BControlPro
                  label="Sub Title Typo"
                  value={subTitle.typo}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "subTitle", "typo"),
                    })
                  }
                  Component={Typography}
                  {...premiumProps}
                />
              </>
            )}
            {selectedTheme === "theme4" && (
              <>
                {badge?.status && (
                  <>
                    <ColorsControl
                      label="Badge Colors"
                      value={badge?.colors}
                      onChange={(value) =>
                        setAttributes({
                          contents: updateData(
                            contents,
                            value,
                            "badge",
                            "colors"
                          ),
                        })
                      }
                    />
                    <Typography
                      label="Badge typo"
                      value={badge?.typo}
                      onChange={(value) =>
                        setAttributes({
                          contents: updateData(
                            contents,
                            value,
                            "badge",
                            "typo"
                          ),
                        })
                      }
                    />
                  </>
                )}
                <BControlPro
                  label="Title Color"
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
                  label="Title Typo"
                  value={title.typo}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "title", "typo"),
                    })
                  }
                  Component={Typography}
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

                <BControlPro
                  label="Sub Title Typo"
                  value={subTitle.typo}
                  onChange={(value) =>
                    setAttributes({
                      contents: updateData(contents, value, "subTitle", "typo"),
                    })
                  }
                  Component={Typography}
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

            {selectedTheme != "theme5" && (
              <>
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
              </>
            )}

            {(selectedTheme === "theme3" ||
              (selectedTheme === "theme4" && btn2?.status)) && (
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
                <BControlPro
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
                  Component={NumberControl}
                  {...premiumProps}
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
                      styles: updateData(styles, value, "particles", "density"),
                    })
                  }
                />
              </FlexBlock>
            </Flex>
          </PanelBody>
          <PanelBody
            className="bPlPanelBody"
            title={__("Cube Settings", "parallax-section")}
            initialOpen={false}
          >
            <Flex justify="start" align="center" gap={2}>
              <BControlPro
                checked={options?.isCube}
                onChange={() =>
                  setAttributes({
                    options: updateData(options, !options.isCube, "isCube"),
                  })
                }
                Component={ToggleControl}
                {...premiumProps}
              />
              <p className="mt10">Show Cube</p>
            </Flex>

            <PanelRow>
              <Label className="mt0">Position X</Label>
              <Device />
            </PanelRow>
            <BControlPro
              step={1}
              shiftStep={10}
              min={1}
              max={cube.position.y[device].includes("%") ? 100 : null}
              value={cube.position.x[device]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "cube",
                    "position",
                    "x",
                    device
                  ),
                })
              }
              Component={UnitControl}
              {...premiumProps}
            />

            <PanelRow>
              <Label className="mt0">Position Y</Label>
              <Device />
            </PanelRow>
            <BControlPro
              step={1}
              shiftStep={10}
              min={1}
              max={cube.position.y[device].includes("%") ? 100 : null}
              value={cube.position.y[device]}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "cube",
                    "position",
                    "y",
                    device
                  ),
                })
              }
              Component={UnitControl}
              {...premiumProps}
            />

            <BControlPro
              label="Front Color"
              value={cube.front}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "cube", "front"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Back Color"
              value={cube.back}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "cube", "back"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Top Color"
              value={cube.top}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "cube", "top"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Bottom Color"
              value={cube.bottom}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "cube", "bottom"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Left Color"
              value={cube.left}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "cube", "left"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />

            <BControlPro
              label="Right Color"
              value={cube.right}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "cube", "right"),
                })
              }
              Component={ColorControl}
              {...premiumProps}
            />
          </PanelBody>
        </>
      )}

      {selectedTheme === "theme4" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Leaf Style", "parallax-section")}
          initialOpen={false}
        >
          <Flex justify="start" align="center" gap={2}>
            <BControlPro
              checked={styles?.leaf?.status}
              onChange={() =>
                setAttributes({
                  styles: updateData(
                    styles,
                    !styles?.leaf?.status,
                    "leaf",
                    "status"
                  ),
                })
              }
              Component={ToggleControl}
              {...premiumProps}
            />
            <p className="mt10">Show Leaf</p>
          </Flex>
          {styles?.leaf?.status && (
            <>
              <Flex>
                <Label className="mt0">Leaf Count</Label>
                <NumberControl
                  value={leaf?.count}
                  onChange={(value) =>
                    setAttributes({
                      styles: updateData(styles, value++, "leaf", "count"),
                    })
                  }
                />
              </Flex>
              <ColorControl
                label={__("Leaf Color", "parallax-section")}
                value={leaf?.color}
                onChange={(value) =>
                  setAttributes({
                    styles: updateData(styles, value, "leaf", "color"),
                  })
                }
              />
            </>
          )}
        </PanelBody>
      )}

      {selectedTheme === "theme5" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Modal Style", "parallax-section")}
          initialOpen={false}
        >
          <ColorControl
            label="Background Color"
            value={t5Styles?.modal?.background}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "background"
                ),
              })
            }
          />
          <ColorControl
            label="Close Button Color"
            value={t5Styles?.modal?.closeBtn?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "closeBtn",
                  "color"
                ),
              })
            }
          />
          <ColorControl
            label="Close Button Hover Color"
            value={t5Styles?.modal?.closeBtn?.hovColor}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "closeBtn",
                  "hovColor"
                ),
              })
            }
          />
          <ColorControl
            label="Title Color"
            value={t5Styles?.modal?.title?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "title",
                  "color"
                ),
              })
            }
          />
          <ColorControl
            label="Sub Title Color"
            value={t5Styles?.modal?.subTitle?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "subTitle",
                  "color"
                ),
              })
            }
          />
          {/* <InputControl
            label="Button Text"
            value={t5Styles?.modal?.btn?.text}
            placeholder="text..."
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "btn",
                  "title"
                ),
              })
            }
          /> */}
          <ColorsControl
            label="Button Colors"
            value={t5Styles?.modal?.btn?.colors}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "btn",
                  "colors"
                ),
              })
            }
          />
          <ColorsControl
            label="Button Hover Colors"
            value={t5Styles?.modal?.btn?.hovColors}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "t5Styles",
                  "modal",
                  "btn",
                  "hovColors"
                ),
              })
            }
          />
        </PanelBody>
      )}
    </>
  );
};

export default Style;
