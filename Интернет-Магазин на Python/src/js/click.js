function shiftSubDiv(n){
  var el = document.getElementById('subDiv'+n);
 
  if ( el.style.display == '' ){
    el.style.display = 'block';
  }
  else{
    if ( el.style.display == 'block' )
      el.style.display = '';
  }
}
