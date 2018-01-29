;( function ( window ) {

try {

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

if ( document.documentElement.clientWidth > 480 ) {
  alert( 'IMPORTANT: this example adapted only for mobile phones.' );
}

} catch ( ex ) { alert( ex ); }

} )( this );
