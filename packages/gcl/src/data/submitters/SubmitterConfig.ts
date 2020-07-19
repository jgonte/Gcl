import RequestHeader from "../RequestHeader";
import AuthProvider from "../../auth/AuthProvider";

export default class SubmitterConfig {
    /**
     * The parameters to pass to the request
     */
    params: any;

    /**
     * The headers to pass to the request
     */
    headers: RequestHeader[];

    /**
     * The URl to send the request to
     */
    url: string;

    /**
     * The auth provider. If it is not nil, then the loader will call its authorize method to set the authorization header
     */
    authProvider: AuthProvider;

    /**
     * The error handler
     */
    onError: (error: Error) => void;

    /**
     * The data submitted to the server
     */
    data: string;

    /**
     * The method to call
     */
    method: "post" | "put" | "delete";
}