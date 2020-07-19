import LoaderConfig from "./LoaderConfig";
import Filter from "../filters/Filter";
import Sorter from "../Sorter";

/**
 * The configuration object passed to a collection loader
 */
export default class CollectionLoaderConfig extends LoaderConfig {

    /**
     * How many records to return from a dynamic query
     */
    top: number;

    /**
     * How many records to skip in a dynamic query
     */
    skip: number;

    /**
     * The array of fields to select in a dynamic query
     */
    fields: string[];

    /**
     * The filter to filter by in a dynamic query
     */
    filter: Filter;

    /**
     * The sorters to sort by in a dynamic query
     */
    sorters: Sorter[];
}