import apiClient from "./apiClient";

export async function getSuspects() {
    try {
        const response = await apiClient.get("/suspects");

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}
