interface Occupation {
    [index: number]: string;
}

interface Appearance {
    [index: number]: number;
}

interface Category {
    [index: number]: string;
}

export interface Character {
    id: number;
    name: string;
    birthday: string;
    occupation: Occupation[];
    img: string;
    status: string;
    nickname: string;
    appearance: Appearance[];
    portrayed: string
    category: Category[];
}