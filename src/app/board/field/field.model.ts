import { CardType } from "./types"

export class Field {
    public isRevealed: boolean;

    constructor(private type: CardType) {
        this.isRevealed = false;
    }

    getType() {
        return this.type;
    }

    isIdentical(field: Field) {
        return this.type === field.getType();
    }
}