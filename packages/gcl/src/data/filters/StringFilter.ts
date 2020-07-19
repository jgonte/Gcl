import Filter from "./Filter";

export default class StringFilter extends Filter {

    /**
     * The name of the field to filter
     */
    field: string;

    /**
     * The function of the filter
     */
    fcn: "contains" | "startswith" | "endswith";

    /** 
     * The value to filter by 
     */
    value: string;

    build(): string {
        
        if (!this.field) {

            throw new Error(`String filter with function: '${this.fcn}' requires a field.`);
        }

        if (!this.value) {

            throw new Error(`String filter for field: '${this.field}' requires a value.`);
        }

        return `${this.fcn}(${this.field}, ${`'${this.value}'`})`;
    }

}