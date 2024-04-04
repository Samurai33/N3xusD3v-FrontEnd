function growDiv() {
    var grow = document.getElementById('grow')
    var btnMais = document.getElementById('botao-mais')
    var btnMin = document.getElementById('botao-min')

    if (grow.clientWidth) {
        grow.style.width = 0
        btnMin.style.display = 'none'
        setTimeout(() => {
            grow.style.display = 'none'
            btnMais.style.display = 'block'
        }, 400)
    } else {
        btnMais.style.display = 'none'
        grow.style.display = 'block'
        btnMin.style.display = 'block'
        setTimeout(() => grow.style.width = '100%', 10)
    }
}

/*  Replace all SVG images with inline SVG */
$('img.svg').each(function(){
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    
    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Replace image with new SVG
        $img.replaceWith($svg);
      });
    });
