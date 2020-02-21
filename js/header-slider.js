
$(document).ready(function(){

  const headerSlider = $("#headerSlider");

  headerSlider.on('initialize.owl.carousel initialized.owl.carousel', function(event){

    $('.slide-controls-number__active').text(event.item.index + 1)
    $('.slide-controls-number__total').text(event.item.count)
  })


  headerSlider.owlCarousel({
    items: 1,
    //loop: true, 
    dots: false, 
    smartSpeed: 1000
  });

  var owl = $('#headerSlider');
    owl.owlCarousel();

    $('#headerSliderLeft').click(function() {
      console.log('left')
      headerSlider.trigger('prev.owl.carousel');
    })

    $('#headerSliderRight').click(function() {
      console.log('right')
      headerSlider.trigger('next.owl.carousel');
    })

    headerSlider.on('changed.owl.carousel', function(event){

      $('.slide-controls-number__active').text(event.item.index + 1)
      $('.slide-controls-number__total').text(event.item.count)
    })

  

    

});