import { pedirCarta, valorCarta, crearCartaHTML } from "./";
import { puntosJugador } from "../index";

/**Es el turno de la computadora
 * 
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Se ponen los puntos totales computadora 
 * @param {Array<string>} deck Deck de las cartas
 * @param {Number} deck Div cartas computadora
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []  ) => {

    let puntosComputadora = puntosJugador;

    do {
        const carta = pedirCarta( deck );

        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;


        if ( puntosMinimos > 21 ) break;
        

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else alert('Computadora Gana')
    }, 100 );

}