interface AnimalI {
    name: string;
    gender: string;
    voice: () => void;
}

abstract class Animal implements AnimalI {
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(private _name: string, private _gender: string) {
        this._name = _name;
        this._gender = _gender;
    }

    public voice(): void {
        console.log('VOICE');
    }
}

export class Dog extends Animal {
    constructor(private dogName: string, private dogDenger: string) {
        super(dogName, dogDenger);
    }
}
