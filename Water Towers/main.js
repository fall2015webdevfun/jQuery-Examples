$(document).ready(
  function(){
    $("li figure").on("click",function(){
        addMyClass(this);
        findMyImage(this);
    }
    )
  }
);

/* add a border to clicked image */
function addMyClass(item){
  $("figure").removeClass("clicked");
  $(item).addClass("clicked");
};

/* Figure out the image we're looking for */
function findMyImage(item){
  var myKids = $(item).children();
  var myImage = myKids[0];
  var imageSrc = $(myImage).attr("src");
  var regExPatt =/[0-9]+/;
  var regExItem = new RegExp(regExPatt);
  var imageNum = regExItem.exec(imageSrc);
  var myCaption = myKids[1];
  var imageUrl = "images/watertowers-" + imageNum[0] +".jpg";

  $("div#image figure").fadeOut(1000, function(){

    $("div#image img").attr("src",imageUrl);
    $("div#image figcaption").text( $(myCaption).text() );
  });

  $("div#image figure").fadeIn("slow");


};
