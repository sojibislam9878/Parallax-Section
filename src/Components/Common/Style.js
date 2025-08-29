import { getSpaceCSS } from '../../../../bpl-tools/utils/getCSS';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { verticalAlign, textAlign, background, minHeight, padding, layout, styles, contents, selectedTheme } = attributes;
	

	const mainBlk = `.wp-block-psb-parallax`;

	const mainSl = `#${id}`;
	// console.log(mainSl);
	


	// ================== theme 2 ========================= //
	const theme2Sl = `${mainSl} .BPBlurEffectParallax`
	const sectionSl = `${theme2Sl} .hero`;
	const bgSl = `${theme2Sl} .hero-bg`;
	const contSl = `${theme2Sl} .hero-content`
	const titleSl = `${theme2Sl} h1`
	const descriptionSl = `${theme2Sl} p`
	const btnSl = `${theme2Sl} .btn`

	// =================== theme 3 ======================= //
	const theme3Sl = `${mainSl} .BPVerticalParallax`
	const parallaxItemSL = `${theme3Sl} .parallax-item`;
	const textContSL = `${parallaxItemSL} .text-cont`;
	const titleSL = `${textContSL} .title`;
	const descriptionSL = `${textContSL} .description`;
	const btnSL = `${textContSL} .btn`;

	// ============== theme 4 ========================= //
	const theme4Sl = `${mainSl} .bpParticleParallax`
	const particleParallaxSl = `${theme4Sl} .hero-container`
	const cubeSl = `${particleParallaxSl} .floating-cube`;
	const heroContentSl = `${particleParallaxSl} .hero-content`;
	const textContentSl = `${heroContentSl} .text-content`;
	const gradientTextSl = `${textContentSl} .gradient-text`;
	const subTitleSl = `${textContentSl} .block`;
	const t4Description = `${theme4Sl} p`
	const t4PrimaryBtn = `${theme4Sl} .gradient-btn`;
  const t4OutlineBtn = `${theme4Sl} .outline-btn`;

	// ======================== theme 5 ======================= //
	const theme5Sl = `${mainSl} .bplThreeImageParallax`;
	const upperBackground = `${theme5Sl} .bg-top`;
	const lowerBackground = `${theme5Sl} .bg-bottom`;
	const badgeSl = `${theme5Sl} .badge`;
	const t5Title = `${theme5Sl} h1`;
	const t5SubTitle = `${theme5Sl} .sub-title `;
	const t5Description = `${theme5Sl} p `;
	const t5PrimaryBtn = `${theme5Sl} .btn.primary`;
	const t5OutlineBtn = `${theme5Sl} .btn.outline`;
	const leafSvg = `${theme5Sl} #leaves-container svg`;

	// ========================= theme 6 ============================ //
	const theme6Sl = `${mainSl} .bplScrolingParallax`;
	const t6Title = `${theme6Sl} h3`;
	const t6SubTitle = `${theme6Sl} p`;
	const t6CardSl = `${theme6Sl} .card`;
	const t6ParallaxRow = `${theme6Sl} .parallax-row`;
	const t6ParallaxMiddleRow = `${theme6Sl} .middle`;
	// ${getTypoCSS(t6Title, contents?.title?.typo)?.styles}
	// ${getTypoCSS(t6SubTitle, contents?.description?.typo)?.styles}

	// console.log(layout?.t5LayoutSetting);
	


	return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		${getTypoCSS("", contents?.title?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.description?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.subTitle?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.badge?.typo)?.googleFontLink}

    ${getTypoCSS(titleSl, contents?.title?.typo)?.styles}
    ${getTypoCSS(descriptionSl, contents?.description?.typo)?.styles}
    ${getTypoCSS(titleSL, contents?.title?.typo)?.styles}
    ${getTypoCSS(descriptionSL, contents?.description?.typo)?.styles}
    ${getTypoCSS(gradientTextSl, contents?.title?.typo)?.styles}
    ${getTypoCSS(subTitleSl, contents?.subTitle?.typo)?.styles}
    ${getTypoCSS(t4Description, contents?.description?.typo)?.styles}
		${getTypoCSS(badgeSl, contents?.badge?.typo)?.styles}
		${getTypoCSS(t5Title, contents?.title?.typo)?.styles}
		${getTypoCSS(t5SubTitle, contents?.subTitle?.typo)?.styles}
		${getTypoCSS(t5Description, contents?.description?.typo)?.styles}

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

				${t4PrimaryBtn}{
					${getColorsCSS(contents?.btns?.btn1?.colors)}
					&:hover{
						${getColorsCSS(contents?.btns?.btn1?.hoverColors)}
					}
				}
				${t4OutlineBtn}{
					${getColorsCSS(contents?.btns?.btn2?.colors)}
					&:hover{
						${getColorsCSS(contents?.btns?.btn2?.hoverColors)}
					}
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

				${badgeSl}{
				${getColorsCSS(contents?.badge?.colors)}
				}
				${upperBackground}{
      		background-color:${styles?.t4Styles?.backgroundColors?.upper};
				}
				${lowerBackground}{
      		background-color:${styles?.t4Styles?.backgroundColors?.lower};
				}

				${t5Title}{
				color:${contents?.title?.color};
				}
				${t5SubTitle}{
				color:${contents?.subTitle?.color};
				}
				${t5Description}{
				color:${contents?.description?.color};
				}
				${t5PrimaryBtn}{
					${getColorsCSS(contents?.btns?.btn1?.colors)}
					&:hover{
						${getColorsCSS(contents?.btns?.btn1?.hoverColors)}
					}
				}
				${t5OutlineBtn}{
					${getColorsCSS(contents?.btns?.btn2?.colors)}
					&:hover{
						${getColorsCSS(contents?.btns?.btn2?.hoverColors)}
					}
				}

				${leafSvg}{
				fill:${styles?.leaf?.color};
				}

				${theme6Sl}{
					${getBackgroundCSS(styles.background)}
					width:${layout.width.desktop};
					height:${layout.height.desktop};
					margin:${getBoxCSS(layout.margin.desktop)};
					padding:${getBoxCSS(layout.padding.desktop)};
				}

				${t6Title}{
					color:${contents?.title?.color};
					}
					
				${t6SubTitle}{
				color:${contents?.description?.color};
				}

				${t6ParallaxRow}{
      		gap: ${layout?.t5LayoutSetting?.card?.rowGap};
				}
				${t6ParallaxMiddleRow}{
      		margin: ${layout?.t5LayoutSetting?.card?.colGap} 0;
				}

				${t6CardSl}{
					width: ${layout?.t5LayoutSetting?.card?.width};
					height: ${layout?.t5LayoutSetting?.card?.height};
				}









		`.replace(/\s+/g, " "),
      }}
    />
  );
}
export default Style;