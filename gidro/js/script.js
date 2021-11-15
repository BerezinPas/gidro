"use strict";

$( document ).ready(function() {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--prev"><img src="./img/arrow.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btn--next"><img src="./img/arrow.svg" alt=""></button>',
        responsive: [
           {
            breakpoint: 969,
            settings: {
                arrows: false
            }
           }
        ]
    });

    $('.tab').on('click', function (event) {
        event.preventDefault();
        
        $($(this).siblings()).removeClass('active');
        $($(this).closest('.tabs-wrapper').find('.tabs-content')).removeClass('active');
        $(this).addClass('active');
        $( $(this).attr('href')).addClass('active');

        $('.product-slider').slick('setPosition');
    })
    $('.product-item__heart').click(function () {
        $(this).toggleClass('active');
    });
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--prev"><img src="./img/arrow-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btn--next"><img src="./img/arrow-black.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
         ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle('200');
       
    })

    $(".js-range-slider").ionRangeSlider({
        type: "double",
       
        min: 100000,
        max: 500000,
        min_postfix: 'от'
    });

    $('.catalog__filter-btn-grid').click(function () {
        if (!$(this).hasClass('active')) {
            $('.catalog__filter-btn-line').removeClass('active');
            $(this).addClass('active');
            $('.product-item__wrapper').removeClass('product-item__wrapper--list');
        }
    });
    $('.catalog__filter-btn-line').click(function () {
        if (!$(this).hasClass('active')) {
            $('.catalog__filter-btn-grid').removeClass('active');
            $(this).addClass('active');
            $('.product-item__wrapper').addClass('product-item__wrapper--list');
        }
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        spacing   : "7px"
      });

    $('.menu__btn').click(function () {
        console.log('click');
        $(this).toggleClass('active');
        $('.menu-mb__list').toggleClass('active');
    });
    $('.footer__top-title-drop').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
    $('.aside__btn').click(function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })
})