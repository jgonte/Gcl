export default abstract class IntlProvider {

    /**
     * The current language set in the provider
     */
    lang: string;

    /**
     * The data with the translation
     */
    data: any;

    /**
     * Retrieves a dictionary with the translated texts
     */
    getData(lang: string, key: string): string {

        return this.data[lang][key];
    }

    abstract loadData(): void;
}