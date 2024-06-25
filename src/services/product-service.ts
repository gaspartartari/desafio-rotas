import { ProductDTO } from "../models/product";


export function findByCategory ( category:string) : ProductDTO[] | undefined {
    return products.filter(x => x.category === category);
}

const products : ProductDTO[] = [
    {
        id: 1,
        name: 'Produto 1',
        category: 'computadores'
    },
    {
        id: 2,
        name: 'Produto 2',
        category: 'computadores'
    },
    {
        id: 3,
        name: 'Produto 3',
        category: 'computadores'
    },
    {
        id: 14,
        name: 'Produto 1',
        category: 'eletrônicos'
    },
    {
        id: 4,
        name: 'Produto 2',
        category: 'eletrônicos'
    },
    {
        id: 5,
        name: 'Produto 3',
        category: 'eletrônicos'
    },
    {
        id: 6,
        name: 'Produto 1',
        category: 'livros'
    },
    {
        id: 17,
        name: 'Produto 2',
        category: 'livros'
    },
    {
        id: 7,
        name: 'Produto 3',
        category: 'livros'
    },
    
]