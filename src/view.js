import { createRoot } from 'react-dom/client';
import Style from './Components/Common/Style';
import BlurEffectParallax from './Components/Common/Themes/BlurEffectParallax';
import './style.scss';
import { parallaxInit } from './utils/functions';
import VerticalParallax from './Components/Common/Themes/VerticalParallax';
import ParticleParallax from './Components/Common/Themes/ParticleParallax';
import ThreeImageParallax from './Components/Common/Themes/ThreeImageParallax';

document.addEventListener('DOMContentLoaded', () => {
	const parallaxEls = document.querySelectorAll('.wp-block-psb-parallax');

	parallaxEls.forEach(parallaxEl => {
		const parallaxImgEl = parallaxEl.querySelector('.psbParallaxImg');
		const attributes = JSON.parse(parallaxEl.dataset.attributes);
		const { selectedTheme } = attributes;
		const className = parallaxEl.className;


		if (selectedTheme === "default") {
			const styleRoot = document.createElement('div');
			parallaxEl.insertBefore(styleRoot, parallaxEl.firstChild);
			createRoot(styleRoot).render(
				<Style {...{ attributes, id: parallaxEl.id }} />
			);

			if (parallaxImgEl) {
				parallaxInit(parallaxImgEl, parallaxImgEl.parentElement);
				document.addEventListener('scroll', () => {
					parallaxInit(parallaxImgEl, parallaxImgEl.parentElement);
				});
			}
		}
		
		
		else {
			createRoot(parallaxEl).render(
				<div className={className} id={parallaxEl.id}>
					<Style {...{ attributes, id: parallaxEl.id }} />

					{(() => {
						switch (selectedTheme) {
							case "theme1":
								return <BlurEffectParallax {...{ attributes }} />;
							case "theme2":
								return <VerticalParallax {...{ attributes }} />;
							case "theme3":
								return <ParticleParallax {...{ attributes }} />;
							case "theme4":
								return <ThreeImageParallax {...{ attributes }} />;
							default:
								return null;
						}
					})()}

				</div>
			)
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