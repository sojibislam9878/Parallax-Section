import { getSpaceCSS } from '../../../../bpl-tools/utils/getCSS';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { verticalAlign, textAlign, background, minHeight, padding, layout, styles, contents, selectedTheme } = attributes;
	

	const mainBlk = `.wp-block-psb-parallax`;

	const mainSl = `#${id}`;
	// console.log(mainSl);
	


	// ================== theme 1 ========================= //
	const theme2Sl = `${mainSl} .BPBlurEffectParallax`
	const sectionSl = `${theme2Sl} .hero`;
	const bgSl = `${theme2Sl} .hero-bg`;
	const contSl = `${theme2Sl} .hero-content`
	const titleSl = `${theme2Sl} h1`
	const descriptionSl = `${theme2Sl} p`
	const btnSl = `${theme2Sl} .btn`

	// =================== theme 2 ======================= //
	const theme3Sl = `${mainSl} .BPVerticalParallax`
	const parallaxItemSL = `${theme3Sl} .parallax-item`;
	const textContSL = `${parallaxItemSL} .text-cont`;
	const titleSL = `${textContSL} .title`;
	const descriptionSL = `${textContSL} .description`;
	const btnSL = `${textContSL} .btn`;

	// ============== theme 3 ========================= //
	const theme4Sl = `${mainSl} .bpParticleParallax`
	const particleParallaxSl = `${theme4Sl} .hero-container`
	const cubeSl = `${particleParallaxSl} .floating-cube`;
	const heroContentSl = `${particleParallaxSl} .hero-content`;
	const textContentSl = `${heroContentSl} .text-content`;
	const gradientTextSl = `${textContentSl} .gradient-text`;
	const subTitleSl = `${textContentSl} .block`;

	// console.log(contents?.title?.typo);
	


	return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		${getTypoCSS("", contents?.title?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.description?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.subTitle?.typo)?.googleFontLink}

    ${getTypoCSS(titleSl, contents?.title?.typo)?.styles}
    ${getTypoCSS(descriptionSl, contents?.description?.typo)?.styles}
    ${getTypoCSS(titleSL, contents?.title?.typo)?.styles}
    ${getTypoCSS(descriptionSL, contents?.description?.typo)?.styles}
    ${getTypoCSS(gradientTextSl, contents?.title?.typo)?.styles}
    ${getTypoCSS(subTitleSl, contents?.subTitle?.typo)?.styles}

		${
      selectedTheme === "default" &&
      `
				${mainBlk}{
					position: relative;
					overflow: hidden;
				}
		`
    }
		

		${mainSl}{
			min-height: ${minHeight};
		}

		${mainSl} .psbParallaxSection{
			justify-content: ${verticalAlign};
			text-align: ${textAlign};
			min-height: ${minHeight};
			padding: ${getSpaceCSS(padding)};
		}
		${mainSl} .psbParallaxImg{
			${getBackgroundCSS(background)}
		}



		${sectionSl} {
			min-height:${layout.height.desktop};
			max-width:${layout.width.desktop};
			margin:${getBoxCSS(layout.margin.desktop)};
			text-align: ${styles.textAlign};
			}
	
			${bgSl}{
			${getBackgroundCSS(styles.background)}
			}
	
			${contSl} h1{
			color:${contents.title.color};
			}
	
			${contSl} p{
			color:${contents.description.color};
			}
	
			${btnSl}{
				${getColorsCSS(contents.btns?.btn1.colors)}
	
					&:hover{
					${getColorsCSS(contents.btns?.btn1.hoverColors)}
					}
				}
	
			@media  (min-width:641px) and (max-width: 1024px){
					${sectionSl}{
					width:${layout.width.tablet};
					min-height:${layout.height.tablet};
					margin:${getBoxCSS(layout.margin.tablet)};
					}
				}
		
	
	
				@media (max-width: 480px){
					${sectionSl}{
					width:${layout.width.mobile};
					min-height:${layout.height.mobile};
					margin:${getBoxCSS(layout.margin.mobile)};
					}
				}

				${parallaxItemSL}{
					${getBackgroundCSS(styles.background)}
					width:${layout.width.desktop};
					min-height:${layout.height.desktop};
					margin:${getBoxCSS(layout.margin.desktop)};
				}
	
				${textContSL}{
				text-align: ${styles.textAlign};
				}
	
				${titleSL}{
				color:${contents.title.color};
				}
				${descriptionSL}{
				color:${contents.description.color};
				}
	
				${btnSL}{
				${getColorsCSS(contents.btns?.btn1.colors)}
	
					&:hover{
					${getColorsCSS(contents.btns?.btn1.hoverColors)}
					}
				}
	
	
				@media  (min-width:641px) and (max-width: 1024px){
					${parallaxItemSL}{
					width:${layout.width.tablet};
					min-height:${layout.height.tablet};
					margin:${getBoxCSS(layout.margin.tablet)};
					}
				}
		
	
	
				@media (max-width: 480px){
					${parallaxItemSL}{
					width:${layout.width.mobile};
					min-height:${layout.height.mobile};
					margin:${getBoxCSS(layout.margin.mobile)};
					}
				}


				${particleParallaxSl}{
					${getBackgroundCSS(styles.background)}
					width:${layout.width.desktop};
					height:${layout.height.desktop};
					margin:${getBoxCSS(layout.margin.desktop)};
					padding:${getBoxCSS(layout.padding.desktop)};
					text-align: ${styles.textAlign};
				}

				${cubeSl}{
						top: ${styles?.cube?.position?.x?.desktop};
						right: ${styles?.cube?.position?.y?.desktop};;
				}

				${cubeSl} .front {
					background: ${styles?.cube?.front};
				}
				${cubeSl} .back {
					background: ${styles?.cube?.back};
				}
				${cubeSl} .top {
					background: ${styles?.cube?.top};
				}
				${cubeSl} .bottom {
					background: ${styles?.cube?.bottom};
				}
				${cubeSl} .left {
					background: ${styles?.cube?.left};
				}
				${cubeSl} .right {
					background: ${styles?.cube?.right};
				}

				${gradientTextSl}{
      			background: ${contents.title.color};
      			-webkit-background-clip: text;
      			-webkit-text-fill-color: transparent;
				}

				${subTitleSl}{
				color:${contents.subTitle.color};
				}

				@media  (min-width:641px) and (max-width: 1024px){
					${particleParallaxSl}{
					padding:${getBoxCSS(layout.padding.tablet)};
					}

					${cubeSl}{
						top: ${styles?.cube?.position?.x?.tablet};
						right: ${styles?.cube?.position?.y?.tablet};;
					}
				}
		
	
	
				@media (max-width: 480px){
					${particleParallaxSl}{
						padding:${getBoxCSS(layout.padding.mobile)};
						}

						${cubeSl}{
							top: ${styles?.cube?.position?.x?.mobile};
							right: ${styles?.cube?.position?.y?.mobile};;
						}
				}








		`.replace(/\s+/g, " "),
      }}
    />
  );
}
export default Style;