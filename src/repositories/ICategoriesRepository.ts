import { Category } from "../model/Category";

// DTO => Data Transfer Object
// Cria um objeto que será responsável para fazer a transferência de dados de uma classe até a outra.

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
