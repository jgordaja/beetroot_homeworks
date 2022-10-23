$(function() {

    // chart

    $('.chart').easyPieChart({
        barColor: '#13E28D',
        trackColor: '#b7bacd',
        scaleColor: '#212534',
        scaleLength: 5,
        lineCap: 'round',
        lineWidth: 3,
        trackWidth: undefined,
        size: 83, 
        rotate: 0, // in degrees
        animate: {
          duration: 1000,
          enabled: true
        },
        easing: function (x, t, b, c, d) { // easing function
          t = t / (d/2);
          if (t < 1) {
            return c / 2 * t * t + b;
          }
          return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    });   
    
    // my tabs

    const tabsA = $('.tab_item a');
    const cards = $('.card');

    tabsA.each(function() {
        $(this).click(function(event) {
            event.preventDefault();
             
            let href = $(this).attr('href'); 

            cards.each(function() {
                let id = $(this).attr('id');

                // href === '#' + id 
                //     ? $(this).removeClass('hide')
                //     : $(this).addClass('hide'); 

                // або:

                if (href === '#' + id ) {
                    $(this).removeClass('hide').siblings().addClass('hide'); 
                }
            }); 
        });
    });

    // my rating - те, що знайшла бісить страшенно, 
    // написала своє, вийшло круто))

    const stars = $('.star_icon');
    const starsFill = $('.star_icon path');

    stars.each(function (index) {
        $(this).mouseover(function () { 
            for (let i = 0; i <= index; i++) { 
                starsFill.eq(i).css("fill", "#ffdd3f"); 
            }
        });
        $(this).mouseout(function () { 
            for (let i = 0; i <= index; i++) { 
                starsFill.eq(i).css("fill", "#8D91A3");
            }
        }); 
        // якщо є клік на одній із зірок
        $(this).click(function () { 
            // зупиняємо події mouseover, mouseout для всіх зірок
            for (let i = 0; i < 5; i++) {
                stars.eq(i).off('mouseover');
                stars.eq(i).off('mouseout'); 
            }
            // додаємо цій і всім попереднім зіркам клас active
            for (let i = 0; i <= index; i++) { 
                stars.eq(i).addClass('star_icon--active');
            }
        }); 
    });

});