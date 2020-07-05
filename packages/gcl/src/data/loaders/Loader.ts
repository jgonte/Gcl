/**
 * Base loader class
 */
abstract class Loader {

    async load(cfg: LoaderConfig) {

        try {

            const response = await fetch(this.buildUrl(cfg), {
                headers: this.buildHeaders(cfg)
            });

            if (!response.ok) {

                throw new Error(response.statusText);
            }

            return await response.json();
        }
        catch (error) {

            if (cfg.onError) { // If there is a handler then handle it

                cfg.onError(error);
            }
            else {

                throw error; // Re-throw
            }
        }
    }

    abstract buildUrl(cfg: LoaderConfig): string;

    /**
     * Builds the headers to be sent from the key-value pair headers of the configuration
     * @param cfg 
     */
    buildHeaders(cfg: LoaderConfig): HeadersInit {

        const headers = new Headers();

        if (cfg.headers) {

            cfg.headers.forEach((header) => headers.append(header.key, header.value));
        }

        return headers;
    }
}