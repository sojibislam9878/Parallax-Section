import { getSpaceCSS } from '../../../../bpl-tools/utils/getCSS';
import { getBackgroundCSS, getBoxCSS, getColorsCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { verticalAlign, textAlign, background, minHeight, padding, layout, styles, contents } = attributes;

	const mainSl = `#${id}`;
	// console.log(mainSl);

	const theme1Sl = `${mainSl} .BPDefaultParallx`
	


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


	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS("", contents?.title?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.description?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.title?.typo)?.googleFontLink}
		${getTypoCSS("", contents?.description?.typo)?.googleFontLink}

    ${getTypoCSS(titleSl, contents?.title?.typo)?.styles}
    ${getTypoCSS(descriptionSl, contents?.description?.typo)?.styles}
    ${getTypoCSS(titleSL, contents?.title?.typo)?.styles}
    ${getTypoCSS(descriptionSL, contents?.description?.typo)?.styles}

		${theme1Sl}{
			min-height: ${minHeight};
		}
		${theme1Sl} .psbParallaxSection{
			justify-content: ${verticalAlign};
			text-align: ${textAlign};
			min-height: ${minHeight};
			padding: ${getSpaceCSS(padding)};
		}
		${theme1Sl} .psbParallaxImg{
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
				${getColorsCSS(contents.btn.colors)}
	
					&:hover{
					${getColorsCSS(contents.btn.hoverColors)}
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
				${getColorsCSS(contents.btn.colors)}
	
					&:hover{
					${getColorsCSS(contents.btn.hoverColors)}
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









		`.replace(/\s+/g, ' ')
	}} />
}
export default Style;