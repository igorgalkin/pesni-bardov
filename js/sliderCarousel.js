'use strict';

class SliderCarousel {
  constructor({
    main,
    wrap,
    btn,
    hplayer,
    next,
    prev,
    position = 0,
    slidesToShow = 2
  }) {
    if (!main || !wrap) {
      console.warn(`slider-carousel: необходимо передать 2 свойства, "main" и "wrap"`);
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.btn = document.querySelector(btn);
    this.hplayer = document.querySelector(hplayer);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow
    };
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }

  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }

    style.textContent = `
      .glo-slider {
        overflow: hidden;
        position: relative;
      }
      .glo-slider__wrap {
        display: flex;
        transition: transform .5s;
        will-change: transform;
      }
      .glo-slider__item {
        flex: 0 0 ${this.options.widthSlide}%;
      }
    `;
    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.position > 0) {
      --this.options.position;
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
    if (this.options.position === 0) {
      this.prev.style.borderTopColor = '#ccc';
      this.prev.style.borderRightColor = '#ccc';
      this.next.style.borderTopColor = '#75b376';
      this.next.style.borderRightColor = '#75b376';
    } else {
      this.next.style.borderTopColor = '#75b376';
      this.next.style.borderRightColor = '#75b376';
    }
  }

  nextSlider() {
    if (this.options.position < this.options.maxPosition) {
      ++this.options.position;
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
    if (this.options.position === this.options.maxPosition) {
      this.next.style.borderTopColor = '#ccc';
      this.next.style.borderRightColor = '#ccc';
      this.prev.style.borderTopColor = '#75b376';
      this.prev.style.borderRightColor = '#75b376';
    } else {
      this.prev.style.borderTopColor = '#75b376';
      this.prev.style.borderRightColor = '#75b376';
    }
  }


  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';

    this.btn.appendChild(this.prev);
    this.btn.appendChild(this.next);

    this.htop = this.hplayer.getBoundingClientRect().height + 30;

    const style = document.createElement('style');
    style.textContent = `
      .glo-slider__prev,
      .glo-slider__next {
        width: 30px;
        height: 30px;
        border-color: transparent;
        border-top: .3rem solid #75b376;
        border-right: .3rem solid #75b376;
        background-color: transparent;
        position: absolute;
        top: ${this.htop}px;
      }
      .glo-slider__next {
        transform: rotate(45deg);
        right: 1rem;
      }
      .glo-slider__prev {
        border-top-color: #ccc;
        border-right-color: #ccc;
        transform: rotate(-135deg);
        left: 1rem;
      }
      .glo-slider__prev:hover,
      .glo-slider__next:hover,
      .glo-slider__prev:focus,
      .glo-slider__next:focus,
      .glo-slider__prev:active,
      .glo-slider__next:active  {
        background: transparent;
        outline: transparent;
      }

    `;
    document.head.appendChild(style);
  }


} 