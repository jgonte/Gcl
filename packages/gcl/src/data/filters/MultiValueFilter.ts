import Filter from "./Filter";

export default class MultiValueFilter extends Filter {

    /**
     * The name of the field to filter
     */
    field: string;

    /**
     * The operator of the filter
     */
    operator: "in" | "not in";

    /** 
     * The values to filter by 
     */
    values: any[];

    build(): string {
        
        if (!this.field) {

            throw new Error('Multivalue filter requires a field name.');
        }

        // let values;

        // if (typeof filter.fieldValues === 'function') {

        //     values = filter.fieldValues();
        // }
        // else {

        //     throw new Error('Invalid field values in multivalue filter');
        // }

        // if (Array.isArray(values)) {

        //     if (!values.length) {

        //         if (typeof filter.fieldValues === 'function') {

        //             return null; // The function did not return any values
        //         }
        //         else {

        //             throw new Error("Values are required for multi-value operators");
        //         }
        //     }

        //     values = values.join(', ');
        // }

        return `${this.field} ${this.operator} (${this.values})`;
    }

}