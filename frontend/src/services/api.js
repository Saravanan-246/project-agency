const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Submission failed");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};