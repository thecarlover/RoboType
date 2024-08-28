const BASE_URL = "https://robohash.org/";

export const fetchRoboImage = async (query) => {
  try {
    // Making the API request
    const response = await fetch(`${BASE_URL}${encodeURIComponent(query)}`);
    
    // Since this is a direct image URL, you don't need to convert the response to JSON.
    // Instead, you can return the response URL directly.
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Returning the image URL
    return response.url;

  } catch (error) {
    console.error("Error fetching the RoboImage:", error);
    throw error;
  }
};
