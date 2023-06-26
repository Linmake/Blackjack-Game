
/**
 * Esta es una funcion que devuelve una carta del deck
 * @param { Array <string> } deck Es el deck de cartas. Ejemplo: [2A, 4D, 10J, 5Q...]
 * @returns { string } Retorna una carta Ejemplo: '5S'
 */

export const pedirCarta = ( deck ) => {
    const carta = deck.pop();
    if( deck.length == 0 ) throw new Error( 'No hay deck' )
    return carta;
}