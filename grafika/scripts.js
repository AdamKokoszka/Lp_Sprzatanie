<!--


// MENU ROZWIJANE

var menuTimer;

function menuRoz() {

  if ($("#nav_res").css("display")=='block') {

    $("nav#menur li").click(function () {

      if ($(this).is(".act")) {
        var stop=0;
      } else
        var stop=1;

      $(this).addClass("act").children("menu").slideDown();

      if (stop)
        return false;

    });


  } else {

    $("nav#menur li").mouseenter(function () {

      if (!$(this).hasClass("act")) {

        menuRozhide();

        var top = $(this).height()+2;
        var padding0 = parseFloat($(this).children("menu").css("padding-left").replace("px","")) + parseFloat($(this).children("menu").css("padding-right").replace("px",""));
        var lef = ( ($(this).children("menu").width()+padding0) / 2 );
        var padding = parseFloat($(this).css("padding-left").replace("px","")) + parseFloat($(this).css("padding-right").replace("px",""));
        var szl = ( ($(this).width()+padding) / 2 );

        lef = lef - szl;

        $(this).addClass("act").children("menu").css("z-index","20").css("left", -lef).css("top", top).slideDown('normal', function() { });

      }

    }).mouseleave(function () {

      if ($(this).hasClass("act")) {

        clearTimeout(menuTimer);
        menuTimer = setTimeout("menuRozhide()", 500);

      }

    }).click(function () {

      var url = $(this).children("a").attr("href");
      if (url && !$(this).children("a").attr("target")) location.href=url;

    });


    $("nav#menur li menu").mouseenter(function () {

      clearTimeout(menuTimer);

    }).mouseleave(function() {

      clearTimeout(menuTimer);
      menuTimer = setTimeout("menuRozhide()", 500);

    });


  }

}


function menuRozhide() {

  $("nav#menur li menu").css("z-index","1").slideUp();
  $("nav#menur li").removeClass("act");

  clearTimeout(menuTimer);

}



// BOXY NASZE USLUGI

function boxyZapla() {

  $("menu#of a").mouseenter(function () {

    var poz = $(this).css("background-position").split(" ");
    $(this).css("background-position", poz[0]+" -60px").children().fadeIn();

  }).mouseleave(function () {

    var poz = $(this).css("background-position").split(" ");
    $(this).css("background-position", poz[0]+" 0px").children().hide();

  });

}





// ZAKLADKI


function zakladkiJquery() {

  $(".zakladki ul li").each(function (i) {


    if ($(this).attr("class")=='s')
      var id_act = $(this).attr("id").replace("zakl_","");
    else
      var id_act=0;


    if (id_act) {
      $("#zakl_"+id_act).addClass("s");
      $("#"+id_act).show();
    }


  });


  $(".zakladki li").click(function () {

    $(".zakladki li").removeClass("s");
    $(".zakladki div.opis").hide();

    var id = $(this).attr("id").replace("zakl_","");

    $(this).addClass("s");
    $("#"+id).fadeIn();

  });

}





//ANIMACJA

var slider_i = Array();
var slider_i_nav = Array();
var slider_time = Array();
var slider_act = Array();

function sliderJquery() {

  // ladowanie sliderow

  $("blockquote").each( function (i) {

    $(this).attr("id", "slider_"+i)

    slider_ip=0;
    slider_ip_nav='';

    $("blockquote#slider_"+i+" div.slajd").each( function (j) {

      $(this).attr("id","sli_"+i+"_"+j);

      slider_ip_nav = slider_ip_nav + '<a id="sli_nav_'+i+'_'+j+'"></a>';

      slider_ip++;

    });

    slider_i[i] = slider_ip;

    if (slider_i[i]>0) {

      $("#slider_"+i+" small").html(slider_ip_nav);
      $("#sli_"+i+"_0").fadeIn();
      $("#slider_"+i+"").height($("#sli_"+i+"_0").height()-3);
      $("#sli_nav_"+i+"_0").addClass("s");
      slider_act[i] = 0;

      if (slider_i[i]>1) {

        clearTimeout(slider_time[i]);
        slider_time[i] = setTimeout("sliderJqueryAuto("+i+")", 5000);

        $("#navl, #navp").show();

      }

    }

  });


  // akcja na offset

  $("blockquote small a").click( function () {

    var nav_id = $(this).attr("id").replace("sli_nav_","");
    nav_id = nav_id.split("_");


    clearTimeout(slider_time[nav_id[0]]);


    $("#sli_"+nav_id[0]+"_"+slider_act[nav_id[0]]).animate({ opacity: 'toggle' }, 1000);
    $("#sli_nav_"+nav_id[0]+"_"+slider_act[nav_id[0]]).removeClass("s");


    slider_act[nav_id[0]] = nav_id[1];


    $("#sli_"+nav_id[0]+"_"+slider_act[nav_id[0]]).animate({ opacity: 'toggle' }, 2000);
    $("#sli_nav_"+nav_id[0]+"_"+slider_act[nav_id[0]]).addClass("s");

    clearTimeout(slider_time[nav_id[0]]);
    slider_time[nav_id[0]] = setTimeout("sliderJqueryAuto("+nav_id[0]+")", 5000);


  });


  // navigowanie

  $("#navl, #navp").click( function () {

    var navl_id = $(this).parent().attr("id").replace("slider_","");

    clearTimeout(slider_time[navl_id]);

    $("#sli_"+navl_id+"_"+slider_act[navl_id]).animate({ opacity: 'toggle' }, 1000);
    $("#sli_nav_"+navl_id+"_"+slider_act[navl_id]).removeClass("s");

    if ($(this).attr("id")=='navl') {

      if ((slider_act[navl_id]-1)>=0)
        slider_act[navl_id] = slider_act[navl_id]-1;
      else
        slider_act[navl_id] = slider_i[navl_id]-1;

    } else {

      if ((slider_act[navl_id]+1)<slider_i[navl_id])
        slider_act[navl_id] = slider_act[navl_id]+1;
      else
        slider_act[navl_id] = 0;

    }


    $("#sli_"+navl_id+"_"+slider_act[navl_id]).animate({ opacity: 'toggle' }, 2000);
    $("#sli_nav_"+navl_id+"_"+slider_act[navl_id]).addClass("s");

    clearTimeout(slider_time[navl_id]);
    slider_time[navl_id] = setTimeout("sliderJqueryAuto("+navl_id+")", 5000);


  });

}

function sliderJqueryAuto(i) {

  $("#sli_"+i+"_"+slider_act[i]).animate({ opacity: 'toggle' }, 1000);
  $("#sli_nav_"+i+"_"+slider_act[i]).removeClass("s");


  slider_act[i] = parseFloat(slider_act[i]) + parseFloat(1);


  if (slider_act[i]==slider_i[i])

    slider_act[i]=0;


  $("#sli_"+i+"_"+slider_act[i]).animate({ opacity: 'toggle' }, 3000);
  $("#sli_nav_"+i+"_"+slider_act[i]).addClass("s");

  clearTimeout(slider_time[i]);

  slider_time[i] = setTimeout("sliderJqueryAuto("+i+")", 5000);

}






// PLYNACE LOGA

var marquee_Imgw=0;
var marquee_Timer;
var marquee_HtmlBase='';
var marquee_iBase=0;
var marquee_i=0;
var marquee_k=1; // kierunek: 1 - w lewo, 0 - w prawo

function marqueeJquery() {

  $("#marquee div img").each( function () {

    marquee_Imgw += $(this).width();
    marquee_Imgw += parseInt($(this).css("margin-right").replace("px",""));

  });


  if (marquee_Imgw > $("#marquee").width()) {

    clearTimeout(marquee_Timer);

    if ($("#marquee").attr("rel")=='right') {
      marquee_k=0;
    }

    marquee_HtmlBase = $("#marquee div").html();

    $("#marquee div").html(marquee_HtmlBase+marquee_HtmlBase+(marquee_k==0 ? marquee_HtmlBase : '' )).css("margin-left", (marquee_k==0 ? -marquee_Imgw : 0 ));

    if (marquee_k==0) {

      marquee_i = marquee_Imgw*2;
      marquee_iBase = marquee_Imgw*2;

    }

    marquee_Timer = setTimeout("marqueeJqueryAuto()", 500);

  }


  $("#marquee div img").mouseenter(function () {

    clearTimeout(marquee_Timer);

  });


  $("#marquee div img").mouseleave(function () {

    if (marquee_Imgw > $("#marquee").width()) {
      clearTimeout(marquee_Timer);
      marquee_Timer = setTimeout("marqueeJqueryAuto()", 100);
    }

  });

}



function marqueeJqueryAuto() {

  if (marquee_k==0)
    marquee_i = marquee_i - 1;
  else
    marquee_i = marquee_i + 1;


  if ( marquee_i%(marquee_Imgw) == 0 ){

    $("#marquee div").html(marquee_HtmlBase+marquee_HtmlBase+(marquee_k==0 ? marquee_HtmlBase : '' ));
    marquee_i=marquee_iBase;

  }

  $("#marquee div").css("margin-left", -marquee_i);

  clearTimeout(marquee_Timer);

  marquee_Timer = setTimeout("marqueeJqueryAuto()", 50);

}

function DRIMOvideo() {

  $("img[rel^='video']").css("display","none").each( function () {

    var img = $(this).attr("src");
    var w = $(this).attr("width");
    var h = parseFloat($(this).attr("height"))+40;

    var vid = $(this).attr("rel");
    vid = vid.split("|");
    var video = vid[1];

    $video = '<div style="width:'+w+'px;height:'+h+'px;margin-top: 5px;"><object width="'+w+'" height="'+h+'" data="/data/player.swf?file='+video+'&img='+img+'" wmode="transparent" type="application/x-shockwave-flash">' +
      '<param value="/data/player.swf?file='+video+'&img='+img+'" name="movie">' +
      '<param value="transparent" name="wmode">' +
      '<param value="true" name="allowfullscreen">' +
      '<param value="always" name="allowscriptaccess">' +
      '</object></div>';

    $(this).after($video).remove();

  });

}





// ODPLAENIE FUNKCJI

function initJquery() {

  //boxyZapla();

  sliderJquery();

  zakladkiJquery();

  if ($("nav[id^=menur]").length)
    menuRoz();

  if ($("div[id^=marquee]").length)
    marqueeJquery();

  DRIMOlightbox();

  DRIMOvideo();

  $('.input_f').focus(function() {

    if ($(this).attr("rel")!='act')
      $(this).val('').attr("rel","act");

  });






}

window.onload = initJquery;


$(function() {

  if (document.cookie) {

    var toCookie = document.cookie.split("; ")
    var pokaz_apl=1;
    for (i=0; i<toCookie.length; i++) {
      if (toCookie[i]=='polityka=1') pokaz_apl=0;
    }

    if (pokaz_apl==1) {
      $("body").append('<div style="display:none;position:fixed;bottom:0;background:#000;width:100%;text-align:center;color:#fff;padding: 10px 0;" id="politosci">Strona www używa plików "Cookies". Szczegółowe informacje w <a href="/page/polityka_plikow_cookies.pdf" style="color:#fff;" target="_blank"><u>Polityka plików "Cookies"</u></a>. &nbsp; <span style="color:#ff0000;cursor:pointer;">Akceptuję, zwiń!</span></a></div>');
      $("#politosci").slideDown("slow");
    }

    $("#politosci span").click(function () {

      $("#politosci").slideUp('slow',function () {

        var waznosc = new Date();
        waznosc.setMonth(waznosc.getMonth()+6);
        document.cookie = "polityka=1; expires=" + waznosc.toGMTString();

      }).remove();

    });

  }

});



// NEWSLETTER

$(function () {

  $("form#form_newsletter").submit(function () {

    $("#email_newsletter").removeClass('novalid');

    if ($("#email_newsletter").val() == "" || $("#email_newsletter").val().indexOf('@') == -1 || $("#email_newsletter").val().indexOf('.') == -1  ) {

      $("#email_newsletter").addClass('novalid');
      return false;

    }

  });

});


var ji = 1;
function insertSwf(plik, width, height) {

  rnd = width+height+ji;
  ji++;

  document.write('<div id="f'+rnd+'" style="width:'+width+'px;height:'+height+'px"></div>');

  document.getElementById('f'+rnd).innerHTML = (
    '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" WIDTH="' + width + '" HEIGHT="' + height + '"><PARAM NAME=movie VALUE="' + plik + '"><PARAM NAME=quality VALUE=high><PARAM NAME=wmode VALUE=transparent><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED src="' + plik + '" quality=high wmode="transparent" bgcolor=#FFFFFF WIDTH="' + width + '" HEIGHT="'
    + height
    + '" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></EMBED></OBJECT>');

}

function wyslijMaila(uzytkownik, serwer){

  location.href = "mailto:" + uzytkownik + "@" + serwer;

}

var ji = 1;
function inAdver(plik) {

  document.write('<div id="f'+plik+'"></div>');

  $("#f"+plik+"").load('/adver.php?a=' + plik, function (){});

}


//-->
