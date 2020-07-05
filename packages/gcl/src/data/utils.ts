interface ParameterBuilderResult {
    /**
     * The url after all its placeholders have been replaced the value of the matching parameter names
     */
    url: string;

    /**
     * The concatenated "&key=value" parameters whose names did not match the placeholders of the url
     */
    params?: string
}

/**
 * Builds the URL replacing any placeholder with the parameters passed if they match the name of the parameter.
 * If a placeholder matching the name of a parameter is not found, then the parameters 
 */
export function buildParams(url: string, params: any) : ParameterBuilderResult {

    if (!params) {

        return null;
    }

    var tpl = this.template(url, params);

    const result: ParameterBuilderResult = {
        url: tpl.text
    };

    if (tpl.keysNotInData.length) {

        result.params = tpl.keysNotInData
            .map((k: string) => `${k}=${params[k]}`)
            .join('&');
    }
    else {

        result.params = null;
    }

    return result;
}