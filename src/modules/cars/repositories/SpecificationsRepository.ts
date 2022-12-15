import { Specification } from "../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "./ISpecificationsRepository";

export class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (spec) => spec.name === name
        );
        return specification;
    }
}
