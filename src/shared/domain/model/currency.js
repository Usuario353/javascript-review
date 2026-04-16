export class Currency {
    static #VALID_CODES = ['USD', 'JPY', 'EUR', 'GBP'];
    #code;

    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new Error(`Invalid currency code: ${code}. Must be one of ${Currency.#VALID_CODES.join(', ')}`); //En este caso el .join de valid codes ayudará a separar con ,
        }
    }
}