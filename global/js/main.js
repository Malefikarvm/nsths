$(document).ready(function(){
  var coord = {
  	x:-2,
    y:-2,
    z:35,
    acceleration:2
  };
  
	$(document).keydown(function(e){
  	//alert(e.keyCode);
    switch(e.keyCode){
    	case 87:
      	//up
        if(coord.y>=0){
          coord.y-=coord.acceleration;
          $('#walks').css('margin-Top',coord.y+'px');
        }
      	break;
      case 83:
      	//down
        if(coord.y<=300){
          coord.y+=coord.acceleration;
          $('#walks').css('margin-Top',coord.y+'px');
        }
        break;
      case 68:
      	//right
        if(coord.x<=500){
          coord.x+=coord.acceleration;
          $('#walks').css('margin-Left',coord.x+'px');
        }
        break;
      case 65:
      	//left
        if(coord.x>=0){
          coord.x-=coord.acceleration;
          $('#walks').css('margin-Left',coord.x+'px');
        }
      	break;
      case 32:
      	idClass = $('#walks').attr('class');
        if(idClass==='circle'){
        	size = $('#walks').css(['height','width','border-radius']);
          coord.z = size.height.substring(-1,2);
          coord.z=parseInt(coord.z)+1;
          $('#walks').css('height',coord.z+'px');
          $('#walks').css('width',coord.z+'px');
          $('#walks').css('border-radius',coord.z+'px');
        }else if(idClass==='square'){
        	size = $('#walks').css(['height','width']);
          coord.z = size.height.substring(-1,2);
          coord.z=parseInt(coord.z)+1;
          $('#walks').css('height',coord.z+'px');
          $('#walks').css('width',coord.z+'px');
        }
      	break;
      case 88:
      	idClass = $('#walks').attr('class');
        if(idClass==='circle'){
        	size = $('#walks').css(['height','width','border-radius']);
          coord.z = size.height.substring(-1,2);
          coord.z=parseInt(coord.z)-1;
          $('#walks').css('height',coord.z+'px');
          $('#walks').css('width',coord.z+'px');
          $('#walks').css('border-radius',coord.z+'px');
        }else if(idClass==='square'){
        	size = $('#walks').css(['height','width']);
          coord.z = size.height.substring(-1,2);
          coord.z=parseInt(coord.z)-1;
          $('#walks').css('height',coord.z+'px');
          $('#walks').css('width',coord.z+'px');
        }
      	break;
      	break;
      default:
      	alert(JSON.stringify(coord));
      	break;
    }
  });
  $(document).keyup(function(){});
  $('#walks').click(function(){
  	idClass = $('#walks').attr('class');
  	if(idClass==='circle'){
    	idClass = $('#walks').removeAttr('style');
    	$('#walks').attr('class','square');
      $('#walks').css('background-color','black');
      $('#walks').css('margin-top',coord.y+'px');
      $('#walks').css('margin-left',coord.x+'px');
      $('#walks').css('height',coord.z+'px');
      $('#walks').css('width',coord.z+'px');
    }else if(idClass==='square'){
    	idClass = $('#walks').removeAttr('style');
      $('#walks').attr('class','circle');
      $('#walks').css('background-color','black');
      $('#walks').css('margin-top',coord.y+'px');
      $('#walks').css('margin-left',coord.x+'px');
      $('#walks').css('height',coord.z+'px');
      $('#walks').css('width',coord.z+'px');
      $('#walks').css('border-radius',coord.z+'px');
    }
  });
});
