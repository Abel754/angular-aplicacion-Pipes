export enum Color { // Enum és una enumeració de paraules
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}