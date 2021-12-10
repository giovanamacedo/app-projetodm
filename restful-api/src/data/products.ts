interface IProduct {
    id?: number
    name: string
    conteudo: string
}

const products: IProduct[] = [
    { id: 1, name: 'Nota 1', conteudo: 'Estudar' },
    { id: 2, name: 'Nota 2', conteudo: 'Fazer exercícios' },
    { id: 3, name: 'Nota 3', conteudo: 'Ler livro' },
    { id: 4, name: 'Nota 4', conteudo: 'Dormir' },
]

export default products