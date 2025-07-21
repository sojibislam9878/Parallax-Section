import { createRoot } from 'react-dom/client';

import Style from './Components/Common/Style';
import BlurEffectParallax from './Components/Common/Themes/BlurEffectParallax';
import './style.scss';
import { parallaxInit } from './utils/functions';
import VerticalParallax from './Components/Common/Themes/VerticalParallax';

document.addEventListener('DOMContentLoaded', () => {
	const parallaxEls = document.querySelectorAll('.wp-block-psb-parallax');

	parallaxEls.forEach(parallaxEl => {
		const parallaxImgEl = parallaxEl.querySelector('.psbParallaxImg');
		const attributes = JSON.parse(parallaxEl.dataset.attributes);
		const { selectedTheme } = attributes;
		const className = parallaxEl.className;
		// const clientId = parallaxEl.id;
		console.log(selectedTheme);





		if (selectedTheme === "default") {
			if (parallaxImgEl) {
				parallaxInit(parallaxImgEl, parallaxImgEl.parentElement);

				document.addEventListener('scroll', () => {
					parallaxInit(parallaxImgEl, parallaxImgEl.parentElement);
				});
			}
		} else {
			createRoot(parallaxEl).render(<>
				<div className={className} id={parallaxEl.id}>
					<Style {...{ attributes, id: parallaxEl.id }} />

					{
							selectedTheme === "theme1" ? <BlurEffectParallax {...{ attributes }} /> : selectedTheme === "theme2" ? <VerticalParallax {...{ attributes }} /> : ""
					}

				</div>
			</>)
		}
	});
});


// import './style.scss';
// import { parallaxInit } from './utils/functions';

// document.addEventListener('DOMContentLoaded', () => {
// 	const parallaxEls = document.querySelectorAll('.wp-block-psb-parallax');
// 	parallaxEls.forEach(parallaxEl => {
// 		const parallaxImgEl = parallaxEl.querySelector('.psbParallaxImg');

// 		if (parallaxImgEl) {
// 			parallaxInit(parallaxImgEl, parallaxImgEl.parentElement);

// 			document.addEventListener('scroll', () => {
// 				parallaxInit(parallaxImgEl, parallaxImgEl.parentElement);
// 			});
// 		}
// 	});
// });