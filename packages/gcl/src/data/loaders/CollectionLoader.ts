import { buildParams } from '../utils';

/**
 * Loader of a collection of items using OData specifications
 */
export default class CollectionLoader extends Loader {

    buildUrl(cfg: CollectionLoaderConfig): string {
        
        const qs : string[] = [];

        let url: string;

        if (cfg.params) {

            const result = buildParams(cfg.url, cfg.params);

            if (result.url) {

                url = result.url;
            }

            if (result.params) {

                qs.push(result.params);
            }
        }

        if (cfg.top) {

            qs.push(`$top=${cfg.top}`);
        }

        if (cfg.skip || cfg.skip === 0) {

            qs.push(`$skip=${cfg.skip}`);
        }

        const select = this.buildSelect(cfg.fields);

        if (select) {

            qs.push(`$select=${select}`);
        }

        const filter = this.buildFilter(cfg.filter);

        if (filter) {

            qs.push(`$filter=${filter}`);
        }

        const orderBy = this.buildOrderBy(cfg.sorters);

        if (orderBy) {

            qs.push(orderBy);
        }

        return qs.length ?
            `${url}?${qs.join('&')}` :
            url;
    }
}