import { InnerBlocks } from '@wordpress/block-editor';

const DefultParallax = ({ speed, parallaxImgEl }) => {
  return (
    <>
      <div className='psbParallaxImg' data-speed={speed} ref={parallaxImgEl}>

      </div>

      <div className='psbParallaxSection'>
        <InnerBlocks template={[
          ['core/heading', {
            content: 'Parallax Section by bPlugins',
            style: {
              typography: { fontSize: '40px' },
              color: { text: '#fff' }
            }
          }],

          ['core/paragraph', {
            content: 'The Parallax effect is a modern web design technique where the background element scrolls slower than the foreground content. The parallax effect can be used on landing pages, long-form content, sales pages, or the homepage of a business website. It is a great way to highlight different sections on a lengthy page.',
            style: {
              typography: { fontSize: '20px' },
              color: { text: '#fff' }
            }
          }],

          ['core/buttons', { contentJustification: 'center', layout: { justifyContent: 'center' } }, [
            ['core/button', {
              text: 'Click Me',
              style: {
                typography: { fontSize: '30px' },
                color: { text: '#fff', gradient: 'linear-gradient(135deg, #4527a4, #8344c5)' }
              }
            }]
          ]]
        ]} />
          </div>
    </>
  )
}

export default DefultParallax
