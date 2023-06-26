
/**
 * Crea la carta y la pone en HTML
 * @param {String} carta nombre de la carta
 * @param {HTMLElement} divCartasJugador div del jugador a poner carta
 * @returns {HTMLImageElement} imagen de la carta en elemento html
 */

export const crearCartaHTML = ( carta, divCartasJugador ) => {
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
   
    return imgCarta;

}