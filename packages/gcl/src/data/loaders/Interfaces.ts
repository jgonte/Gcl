/**
 * The configuration object passed to a loader
 */
interface LoaderConfig {
    params: any;
    headers: Header[];
    url: string;
    onError: any;
}

/**
 * The configuration object passed to a collection loader
 */
interface CollectionLoaderConfig extends LoaderConfig {
    /**
     * How many records to return from a dynamic query
     */
    top: number;

    /**
     * How many records to skip in a dynamic query
     */
    skip: number;

    /**
     * The array of fields to select in a dyanic query
     */
    fields: [];

    
    onError: any
}