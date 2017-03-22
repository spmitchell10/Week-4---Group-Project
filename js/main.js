$("body").on('click', "#addtocart", function(){
  var title = $(this).data("title");
  var content = $(this).data("content");
  
  $(".modal-title").html(title);
  $(".modal-body").html(content);
  $('.modal').modal('toggle')
  
})

function initMap() {
        var uluru = {lat: -72.986149, lng: 167.140839};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }



$.ajax({
 url: 'https://randomuser.me/api/?results=3',
 dataType: 'json',
 success: function(data) {
 
   data.results.forEach(function(eachUser){
       
          $('.user').append( `
                <div class="divide col-md-4 center data">
                <img class="userImage" src="${eachUser.picture.large}"/>
                <h2 id="userName">${eachUser.name.first}</h2>

                `);
        })
     }
});

$.ajax({
    url: 'https://json-data.herokuapp.com/darts/testimonials',
    dataType: 'json',
    success: function(testimonials) {
        
        testimonials.results.forEach(function(eachTestimonial){

        $('.testimonial').append( `
            <div class="col-md-4 testimonial2">
            <h3>"${eachTestimonial.review}"</h3>
            </div>
            `);
        })
    }
});

$.ajax({
    url: 'https://json-data.herokuapp.com/darts/companies',
    dataType: 'json',
    success: function(companies) {
        
        companies.results.forEach(function(eachCompany){

        $('.company').append( `
            <div class="col-md-3 company2">
            <img class="companyImage" src="${eachCompany.image_url}"/>
            </div>
            `);
        })
    }
});