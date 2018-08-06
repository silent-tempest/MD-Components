'use strict';

/**
 * @param {HTMLElement} element The <div class="input--group"></div> wrapper.
 * @returns {HTMLElement} The given element.
 */
module.exports = function input ( group ) {
  var input = group.querySelector( '.input__native' );

  if ( ! input ) {
    throw Error( 'Cannot find <input class="input__native" /> in the given element. Maybe you passed the input directly instead of <div class="input--group"></div>?' );
  }

  function onchange () {
    if ( ! this.value.trim() ) {
      group.classList.remove( 'input--not-empty' );
    } else {
      group.classList.add( 'input--not-empty' );
    }
  }

  input.addEventListener( 'change', onchange, false );

  onchange.call( input );

  return group;
};
