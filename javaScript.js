
$("a.navLink").mouseover(function(){
    var $img = $(this).children();
    var $src = $img.attr('src').split(".png");        
    var $newSrc = $src[0] + "E" + ".png";
    $img.attr('src', $newSrc);
})
$("a.navLink").mouseout(function(){
    var $img = $(this).children();
    var $src = $img.attr('src').slice(0,-5);
    var $newSrc = $src + ".png";    
    $img.attr('src', $newSrc);
})


$("a.fLink").mouseover(function(){
    var $p = $(this).children();
    $p.css('color', 'cyan');     
    
})
$("a.fLink").mouseout(function(){
    var $p = $(this).children();    
    $p.css('color', 'white');     
})

function submitContactForm(){    
    var $url = "www.exampleurl.com";
    var $email = $("#emailI").val();
    var $name = $("#nameI").val();
    var $message = $("#messageI").val();
    if ( ($email.length == 0) || ($name.length == 0) || ($message.length == 0) ) {
        alert("Message not submitted. Please ensure all fields are filled in and retry.");
    } else {
        $.post( $url, {email: $email, name: $name, message: $message } );
        alert("Message submitted - Thank you!");
    }    
};

