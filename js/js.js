$(function() {
  var owl = $(".carousel_1,.carousel_3,.carousel_4");
  owl.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
  dots: true,
  });
});

// $('.owl-carousel_1').owlCarousel({
//     loop:true,
//     nav: true,
//     margin:10,
//     // responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:4,
//             nav:true,
//             loop:false
//         }
//     }
// })

// $(document).ready(function(){
//   $(".owl-carousel_1").owlCarousel({
//   	loop:true,
//     nav: true,
//     margin:10,
//     // responsiveClass:true,
//   		responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:4,
//             nav:true,
//             loop:false
//         }
//     }
//   });
// });

// $(document).ready(function() {
// 	    $('.carousel_1').owlCarousel({
// 	        loop:true,
// 	        margin:10,
// 	        nav:true,
// 	        dots: true,	        
// 	        responsive:{
// 	            0:{
// 	                items:1
// 	            },
// 	            600:{
// 	                items:2
// 	            },
// 	            1000:{
// 	                items:4
// 	            }
// 	        }
// 	    });
// 	});

$(document).ready(function() {
	    $('.carousel_2').owlCarousel({
	        loop:true,
	        margin:10,
	        nav:true,
	        dots: false,	        
	        responsive:{
	            0:{
	                items:1
	            },
	            600:{
	                items:2
	            },
	            1000:{
	                items:4
	            }
	        }
	    });
	});
