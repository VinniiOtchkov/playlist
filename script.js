$(document).ready(function() {
  console.log("ready!");

  var albumArr = [];

  albumArr[0] = {
    src: "images/21.jpg"
  };


  albumArr[1] = {
    src: "images/ghost_in_the_machine.jpg"
  };


  albumArr[2] = {
    src: "images/red.jpg"
  };

  albumArr[3] = {
    src: "images/the_division_bell.jpg"
  };

  albumArr[4] = {
    src: "images/thriller.jpg"
  };


  $('#clrBtn').click(function() {
    $('#textBox').val('');
  });


  $('#subBtn').click(function() {
    $.post("https://lit-fortress-6467.herokuapp.com/post", function(data) {
      alert(data);
    });
    $('#textBox').val('');
  })



  $.ajax({
      url: "https://lit-fortress-6467.herokuapp.com/object"

    })
    .done(function(data) {
      var music = data.results;

      music.sort(function() {
        return 0.5 - Math.random();
      })

      music.splice(0, 2);

      music.forEach(function(f) {
        $("#arty").append(
          "<img src=images/" + f.cover_art + ">"

        )
      })

    });



    $.ajax({
        url: "https://lit-fortress-6467.herokuapp.com/object"

      })
      .done(function(data) {
        var music2 = data.results;

        music2.sort(function() {
          return 0.5 - Math.random();
        })

        music2.forEach(function(f) {
          $("#midTop").append(
            "<img src=images/" + f.cover_art + ">"
          )
        })

        $('#midTop img').click(function(e){

          var newSrc = event.target.getAttribute('src');

          newSrc = newSrc.replace('images/','');

          var albumInfo = music2.find(function(stuff){

            if( stuff.cover_art === newSrc){
              $("#textBox").append('Artist: '+stuff.artist+ '\n'+'Title: ' +stuff.title +'\n' +'\n');
            };

          })
        })
      });


});
