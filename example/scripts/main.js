;( function ( window ) {

'use strict';

var listener = function ( event ) {
  if ( this.classList.contains( 'disabled' ) ) {
    event.preventDefault();
  }
};

addEventListener( 'load', function () {
  var classList, button;

  if ( 'ontouchend' in window == false ) {
    classList = document.body.classList;
    classList.remove( 'mobile' );
    classList.add( 'desktop' );
  }

  for ( button of document.getElementsByTagName( 'button' ) ) {
    button.addEventListener( 'click', listener, false );
  }
}, false );

} )( this );
