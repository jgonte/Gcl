import Filter from "./Filter";

/**
 * A 'not' filter
 */
export default class NotFilter extends Filter {

    /**
     * The operator of the filter
     */
    operator: string = "not";

    /**
     * The child filter of this filter
     */
    filter: Filter;

    build(): string {
        
        // TODO: Add checking for invalid parameters. In this case it must only be operator and one filter

        if (!this.filter) {
            throw new Error(`Not filter requires one child filter.`);
        }

        const childFilter = this.filter.build(); // Recurse

        return childFilter ?
            `${this.operator} ${childFilter}`
            : null; // Nothing to "not"
    }

}