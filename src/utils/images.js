const loaded = (src) => {
  const img = new Image();
  img.src = src;
  return img
}

const unwrap = (wrapper, img) => {
  wrapper.after(img);
  wrapper.remove();
  return img;
};

const wrap = (img, placeholder) => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('style', 'position: relative;');
  img.after(wrapper);
  wrapper.appendChild(img);
  wrapper.appendChild(placeholder);
  return wrapper;
};

const lazy = (node, params = {}) => {
  if(node.tagName === 'IMG'){
    const src = node.getAttribute('lazySrc');
    if(src){
      const placeholder = node.cloneNode();
      placeholder.setAttribute('src', `g/${src}`);
      const wrapper = wrap(node, placeholder);
      placeholder.setAttribute('style', 'position: absolute; top: 0px; left: 0px; width: 100%; z-index: 10;');
      const realSrc = `images/${src}`
      loaded(realSrc).onload = () => {
        node.setAttribute('src', realSrc);
        node.removeAttribute('lazySrc');
        const style = placeholder.getAttribute('style');
        let i = 0
        for (let opacity = 1; opacity >=0; opacity -= 0.01)
        {
          setTimeout(() => placeholder.setAttribute('style', style + " opacity: " + opacity + ";") , 10 * i )
          i += 1;
        }
        setTimeout(() => unwrap(wrapper, node) , 10 * i )
      }
    }
  }else{
    if(params.src){
      node.setAttribute('style', `background-image: url(g/${params.src});`);
      loaded(`images/${params.src}`).onload = () => node.style.backgroundImage = `url('images/${params.src}')`;
    }
  }

  return {destroy(){}};
}

module.exports = {
  lazy: lazy
}
