import Filter from './Filter';

/**
 * An 'and' / 'or' filter
 */
export class LogicalFilter extends Filter {

    /**
     * The children filters of this filter
     */
    filters: Filter[];

    /**
     * The operator of the logical filter
     */
    operator: "and" | "or";

    build(): string {
        const filters = this.filters;

        // TODO: Add checking for invalid parameters. In this case it must only be operator and filters

        if (!filters.length) {
            throw new Error(`Operator: '${this.operator}' requires at least one child filter.`);
        }

        return this.filters.map(item => item.build()).join(` ${this.operator} `); // Recurse
    }

}