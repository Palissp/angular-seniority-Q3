export interface Player {
    id: number,
    firstName: string,
    lastName: string,
    image: string
    attack: number,
    defense: number,
    skills: number,
    idAuthor: string,
    idPosition: number
}

export interface Position {
    id: number,
    description: string
}
