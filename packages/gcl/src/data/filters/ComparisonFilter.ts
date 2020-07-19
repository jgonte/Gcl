import Filter from "./Filter";

export default class ComparisonFilter extends Filter {

    /**
     * The name of the field to filter
     */
    field: string;

    /**
     * The operator of the filter
     */
    operator: "eq" | "ne" | "gt" | "ge" | "lt" | "le";

    /** 
     * The value to filter by 
     */
    value: any;

    build(): string {
        
        if (!this.field) {

            throw new Error(`Comparison filter with operator: '${this.operator}' requires a field.`);
        }

        if (!this.value) {

            throw new Error(`Comparison filter for field: '${this.field}' requires a value.`);
        }

        return `${this.field} ${this.operator} ${this.value instanceof Number ? this.value : `'${this.value}'`}`;
    }
    
}