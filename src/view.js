import { createRoot } from 'react-dom/client';

import Style from './Components/Common/Style';
import BlurEffectParallax from './Components/Common/Themes/BlurEffectParallax';
import './style.scss';
import { parallaxInit } from './utils/functions';

document.addEventListener('DOMContentLoaded', () => {
	const parallaxEls = document.querySelectorAll('.wp-block-psb-parallax');

	parallaxEls.forEach(parallaxEl => {
		const parallaxImgEl = parallaxEl.querySelector('.psbParallaxImg');
		const attributes = JSON.parse(parallaxEl.dataset.attributes);
		const { theme } = attributes;
		// const clientId = parallaxEl.id;
		const className = parallaxEl.className;

		console.log(attributes);





		if ('default' === theme) {
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

					<BlurEffectParallax {...{ attributes }} />
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