export type TypeClass = {
    codice : string;
    titoloCorso : string;
}

export type TypeStudent = {

    name: string;
    surname: string;
    login: string;
    classe: string;
    repos: string[]|undefined|null;
}