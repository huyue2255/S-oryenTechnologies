// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked


$("body").on( "click", ".item h1",function(){
    $(this).next().next(".description").animate({height: 'toggle', opacity: 'toggle'});
}, function () {
    $(this).next().next(".description").animate({height: 'toggle', opacity: 'toggle'});
});


// 2. Remove each item when we click on the closing X
$("body").on( "click", ".item span",function(){
    $(this).parent().remove(".item");
});

// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items




//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page

$(".add").click(function(){
    $elements = $('.title');
    i = $elements.length;
    len = i + 1;
    newtitle = $('#newtitle').val();
    console.log($('#newtitle').val().length > 1);
    if($('#newtitle').val().length > 1){
        $(".item-list").append("<div class=\"item\">" +
            "<h1 class=\"title\">"+ newtitle +"</h1>" +
            "<span class=\"close\">x</span>" +
            "<p class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p>" +
            "</div>");
        $('#newtitle').val('');
    }else {
        $(".item-list").append("<div class=\"item\">" +
            "<h1 class=\"title\">Title "+ len +"</h1>" +
            "<span class=\"close\">x</span>" +
            "<p class=\"description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p>" +
            "</div>");
        i++;
    }
});