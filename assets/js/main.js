"use strict";

var dataNT1 = {
  hello: "Great, you're on the way to become a great coder!"
};

function settingsListCards(cards, show) {
  var newCards = [];
  cards.length > show++ ? newCards = cards.slice(0, show - 1) : cards;
  $('.more').click(function () {
    var loadMore = $('.blog__loading-more');
    loadMore.css('display', 'none');
    $("#listCard").html("");
    showCard(cards);
  });
  showCard(newCards);
}

function showCard(cards) {
  $('.filter button').click(function () {
    var textFilter = $(this).val();
    var listsFilter = cards.filter(function (items) {
      return items.textImg === textFilter;
    });
    $("#listCard").html("");
    listCard(listsFilter);
  });
  listCard(cards);
}

;

function listCard(filterCard) {
  for (var i = 0; i < filterCard.length; i++) {
    var item = filterCard[i];
    $("#listCard").append("   \n                <div class=\"card\">\n                    <a href=".concat(item.href, ">\n                        <div class=\"image position-relative\">\n                            <img class=\"card-img-top\" src=").concat(item.src, " alt=").concat(item.alt, ">\n                            <p>").concat(item.textImg, "</p>\n                        </div>\n                        <div class=\"card-body px-0\">\n                            <div class=\"blog__date\">\n                                <small>").concat(item.date, "</small>\n                            </div>\n                            <div class=\"blog__title\">\n                                <h5>").concat(item.title, "</h5>\n                            </div>\n                            <div class=\"blog__content\">\n                                <p>").concat(item.content, "</p>\n                            </div>\n                            <div class=\"blog__read-more\">\n                                <a href=").concat(item.href, ">Read More</a>\n                            </div>\n                        </div>\n                    </a>\n                </div>\n            "));
  }
}

$(function () {
  var cards = [{
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-1.jpg",
    alt: "blog-1",
    textImg: "Services",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-4.jpg",
    alt: "blog-4",
    textImg: "Economic Crisis",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-7.jpg",
    alt: "blog-7",
    textImg: "Tax",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-2.jpg",
    alt: "blog-2",
    textImg: "Swimming to The Safe Harbour",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-5.jpg",
    alt: "blog-5",
    textImg: "The Elephant In The Room",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-8.jpg",
    alt: "blog-8",
    textImg: "Services",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-3.jpg",
    alt: "blog-3",
    textImg: "Tax",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-6.jpg",
    alt: "blog-6",
    textImg: "Economic Crisis",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-9.jpg",
    alt: "blog-9",
    textImg: "Services",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-10.jpg",
    alt: "blog-10",
    textImg: "Services",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-11.jpg",
    alt: "blog-11",
    textImg: "Swimming to The Safe Harbour",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-12.jpg",
    alt: "blog-12",
    textImg: "Economic Crisis",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-13.jpg",
    alt: "blog-13",
    textImg: "Economic Crisis",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-14.jpg",
    alt: "blog-14",
    textImg: "Services",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-15.jpg",
    alt: "blog-15",
    textImg: "Tax",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }, {
    href: "./blog-post.html",
    src: "./assets/imgs/blog/blog-16.jpg",
    alt: "blog-16",
    textImg: "The Elephant In The Room",
    date: "12.05.2020",
    title: "Placeholder title of article",
    content: "To start, we work with you to make sure your accounting systems are properly set up."
  }];
  settingsListCards(cards, 9);
});
$('.owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});