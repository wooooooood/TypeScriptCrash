import { Component } from '../core/Component';
import { EVENT } from '../utils/Constant';

const template = `
<section class="loading">
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.0" width="160px" height="20px" viewBox="0 0 128 16"
         xml:space="preserve">
      <path fill="#ffc1c4"
            d="M10,3.5C7.614-2.053.844-.758,0.8,5.681c-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,10.01,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C19.156-.813,12.268-1.832,10,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,31.61,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.411-2.736,5.387-6.272C40.756-.813,33.868-1.832,31.6,3.5Zm21.6,0C50.814-2.053,44.044-.758,44,5.681c-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,53.21,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.411-2.736,5.387-6.272C62.356-.813,55.468-1.832,53.2,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,74.81,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C83.956-.813,77.068-1.832,74.8,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1,96.41,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C105.556-.813,98.668-1.832,96.4,3.5Zm21.6,0c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.393,10.393,0,0,1,118.01,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C127.156-.813,120.268-1.832,118,3.5Z"/>
        <g>
        <path fill="#ff0713"
              d="M-11.6,3.5c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1-11.59,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C-2.444-.813-9.332-1.832-11.6,3.5Z"/>
            <path fill="#ff454e"
                  d="M-33.2,3.5c-2.382-5.548-9.152-4.254-9.2,2.186-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1-33.19,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.412-2.736,5.387-6.272C-24.044-.813-30.932-1.832-33.2,3.5Z"/>
            <path fill="#ff8389"
                  d="M-54.8,3.5C-57.186-2.053-63.956-.758-64,5.681c-0.025,3.537,3.224,4.859,5.387,6.272A10.389,10.389,0,0,1-54.79,16c0.2-.782,1.863-2.711,3.8-4.084,2.123-1.5,5.411-2.736,5.387-6.272C-45.644-.813-52.532-1.832-54.8,3.5Z"/>
            <animateTransform attributeName="transform" type="translate"
                              values="22 0;43.5 0;65 0;86.5 0;108 0;129.5 0;151 0;172.5 0" calcMode="discrete"
                              dur="900ms"
                              repeatCount="indefinite"/>
      </g>
    </svg>
</section>`;

export class LoadingProgress extends Component {
  loadingBar;

  setUp() {
    this.initialize({
      template,
    });
  }

  show() {
    this.loadingBar.classList.remove('hidden');
  }

  hide() {
    this.loadingBar.classList.add('hidden');
  }

  mounted() {
    this.loadingBar = document.querySelector('.loading');
    this.hide();

    this.$emitter.on(EVENT.LoadingProgress.SHOW, this.show.bind(this));
    this.$emitter.on(EVENT.LoadingProgress.HIDE, this.hide.bind(this));
  }
}

window.customElements.define('loading-progress', LoadingProgress);
