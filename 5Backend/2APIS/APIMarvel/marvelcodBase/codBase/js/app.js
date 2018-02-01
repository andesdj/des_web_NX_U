/*-- FUNCIONES PROPIAS DE LA VISTA --*/
function showNewSearch(){
  $('.back-container').delay(2000).show('slide', { direction: "right" }, 500);
}

function newSearchEvent(){
  $('input[type="text"]').val('');
  $('html, body').animate(
    {
      scrollTop: 0
    },1300, function(){$('.back-container').hide()});
}

/*-- ----------------------------- --*/
function submitAction(event){
  event.preventDefault();
  var valorBuscado = $('input[type="text"]').val();
  
  var ts='1985';
  var api='1ec88caa7487556a1997e7f439e45f5f';
  var hs='267f2d6cd465563a1ef38f7dd1da4cfc';
  var url = "http://gateway.marvel.com/v1/public/characters?ts="+ts+"&apikey="+api+"&hash="+hs;
  //var url = "http://gateway.marvel.com/v1/public/characters?ts=EL VALOR DE TS ELEGIDO&apikey=EL VALOR DE TU LLAVE PÚBLICA&hash=EL VALOR DEL HASH OBTENIDO";
  console.log(url);
  $.get(url, {name: valorBuscado}, function(response){
    appendHTML(response);
  })
}



/* Función appendHTML que recibe la respuesta de la API como parámetro*/
function appendHTML(response){


var sp=response.data.results[0];
console.log(sp);

$('.nombre').html(sp.name);
$('#descripcion').html(sp.description);
$('#image').attr('src', sp.thumbnail.path+"."+sp.thumbnail.extension);

$.each(sp.comics.items,function (index,value){
  $('#comics').append('<li><a href ="'+value.resourceURI+'" >  '+value.name + '</a></li>');
});

$.each(sp.series.items, function  (index,value) {
   $('#series').append('<li><a href ="#" >  '+value.name + '</a></li>');
});

$.each(sp.stories.items, function  (index,value) {
   $('#stories').append('<li><a href ="#" >  '+value.name + '</a></li>');
});
$.each(sp.events.items, function  (index,value) {
   $('#events').append('<li><a href ="#" >  '+value.name + '</a></li>');
});

/*
  $('.nombre').text(response.data.results[0].name);
  $('#descripcion').text(response.data.results[0].description);
  $('#image').attr('src', response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);

  $.each(response.data.results[0].comics.items, function(index, value){
    $('#comics').append(`<li><a href="#">${value.name}</a></li>`);
  })
 
  $.each(response.data.results[0].series.items, function(index, value){
    $('#series').append(`<li><a href="#">${value.name}</a></li>`);
  })
  $.each(response.data.results[0].stories.items, function(index, value){
    $('#stories').append(`<li><a href="#">${value.name}</a></li>`);
  })
  $.each(response.data.results[0].events.items, function(index, value){
    $('#events').append(`<li><a href="#">${value.name}</a></li>`);
  })
*/
/*-- ANIMACIÓN PROPIA DE LA VISTA, NO MODIFICAR --*/
  $('html, body').animate(
    {
      scrollTop: $("#page2").offset().top
    },1300, showNewSearch);
/*-- ------------------------------------------ --*/
}


/* FUNCIÓN DOCUMENT.READY */
$(function(){
  $(window).scrollTop(0)
  $('input[type="text"]').val('');
  $('.character-form').submit(submitAction);
  $('.back-container').click(newSearchEvent);
})
