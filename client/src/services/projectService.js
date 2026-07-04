const API_URL = "http://localhost:5000/api/projects";

export const getProjects = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch projects");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};