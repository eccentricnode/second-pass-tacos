export interface Taco {
    id: number;
    name: string;
    calories: number;
    protein: string;
    salsa: string;
}

export const emptyTaco: Taco = {
    id: null,
    name: '',
    calories: null,
    protein: '',
    salsa: ''
}
