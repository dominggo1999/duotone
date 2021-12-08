import React, { useContext } from 'react';

import { CanvasContext } from '../../context/Canvas.context';

const defaultImage = 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const GenerateTemplate = () => {
  const {
    image, foreground, wrapper, clientImageName, urlModeLink,
  } = useContext(CanvasContext);

  return `
  <style>
  /* Customize variables to get different effects */
  :root {
    --spacing:           ${wrapper.spacing}px;
    --background-color:  ${wrapper.bg};
    --image-opacity:     ${image.opacity}%;
    --image-blend:       ${image.blendMode};
    --foreground-color:  ${foreground.bg};
    --foreground-blend:  ${foreground.blendMode};
    --blur:              ${image.blur}px;
    --contrast:          ${image.contrast};  
    --brightness:        ${image.brightness};
  }
  .image-wrapper {
    background-color:    var(--background-color);
    display:             flex;
    flex:                1 1 100%;
    height:              100%;
    overflow:            hidden;
    padding:             var(--spacing);
    position:            relative;
  }
  
  .image-wrapper img {
    filter:              grayscale(100%)  contrast(var(--contrast))  blur(var(--blur)) brightness(var(--brightness));
    flex:                1 0 100%;
    height:              100%;
    max-width:           100%;
    mix-blend-mode:      var(--image-blend);
    object-fit:          cover;
    opacity:             var(--image-opacity);
    position:            relative;
    width:               100%;
  }
  
  .image-wrapper .foreground {
    background-color:    var(--foreground-color);
    position:            absolute;
    height:              100%;
    width:               100%;
    top:                 0;
    left:                0;
    mix-blend-mode:      var(--foreground-blend);
    z-index:             1;
  }
  </style>


  <div class="image-wrapper">
    <div class="foreground"></div>

    <!-- Change image source the way you like -->
    <img src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Beautiful Image">

  </div>
  `;
};

export default GenerateTemplate;
