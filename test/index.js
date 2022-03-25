
/* IMPORT */

const {describe} = require ( 'fava' );
const fc = require ( 'fast-check' );
const {default: U8} = require ( '../dist' );

/* MAIN */

describe ( 'Uint8 Encoding', it => {

  it ( 'returns an actual Uint8Array', t => {

    t.is ( U8.encode ( 'foo' ).constructor, Uint8Array );

  });

  it ( 'works with fc-generated codepoints', t => {

    const assert = str => t.is ( U8.decode ( U8.encode ( str ) ), str );
    const property = fc.property ( fc.fullUnicode (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

  it ( 'works with fc-generated strings', t => {

    const assert = str => t.is ( U8.decode ( U8.encode ( str ) ), str );
    const property = fc.property ( fc.fullUnicodeString (), assert );

    fc.assert ( property, { numRuns: 1000000 } );

  });

});
