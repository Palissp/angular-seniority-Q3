import { environment } from "../../../environments/environment"; // Use Relative Imports [Not Error Testing]

export const getApiUrl = (endpoint: string, authorId: string | number) => {
    const url = environment.baseUrlApi + endpoint + authorId;
    return url;
}