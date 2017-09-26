# novi-plugin-owl-carousel
Novi Builder Plugin for visual [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) customization

## How to Install
You should follow several simple steps to install this plugin:
* Copy the novi-plugin-owl-carousel.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change item amount on different resolutions
* Change indent between items on different resolutions
* Add/Remove carousel items
* Turn on/off carousel autoplay
* Turn on/off carousel loop
* Set autoplay delay in seconds

## Developer Settings
* querySelector — containes a css selector which defines the Plugin container.

## How to add Owl Carousel on your page
If your website doesn't contain Owl Carousel follow the instructions below to install it.

### Include Owl files to Website
Copy the "assets/owl.js" and "assets/owl.css" to website's JS and CSS folders respectively and include this files to your website.

### Add Owl HTML Layout
Add basic Owl HTML Layout:

```html
//owl container
 <div class="owl-carousel>
    <div> //owl item
    ...
    </div>
    ...
 </div>
```

### Initialize Owl Carousel
Initialize Owl in JS by adding following block code:

```js

$document.ready(function () {
    var isNoviBuilder = window.xMode;
    var owl = $(".owl-carousel");

    /**
     * Owl carousel
     * @description Enables Owl carousel plugin
    */
    if (owl.length) {
      var i;
      for (i = 0; i < owl.length; i++) {
        var c = $(owl[i]);
        owl[i].owl = c;
        var aliaces = ["-", "-xs-", "-sm-", "-md-", "-lg-"],
        values = [0, 480, 768, 992, 1200],
        responsive = {},
        j, k;

      for (j = 0; j < values.length; j++) {
        responsive[values[j]] = {};
        for (k = j; k >= -1; k--) {
          if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
            responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
          }
          if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
            responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
          }
          if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
            responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
          }
        }
      }
      c.owlCarousel({
        autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
        loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
        dotsContainer: c.attr("data-pagination-class") || false,
        navContainer: c.attr("data-navigation-class") || false,
        mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
        nav: c.attr("data-nav") === "true",
        dots: c.attr("data-dots") === "true",
        dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
        animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
        animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
        responsive: responsive,
        navText: $.parseJSON(c.attr("data-nav-text")) || [],
        navClass: $.parseJSON(c.attr("data-nav-class")) || ['owl-prev', 'owl-next']
      });
      }
    }
});
