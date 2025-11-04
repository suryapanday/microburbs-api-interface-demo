"use server";
export async function listProperties() {
  try {
    const response = await fetch("https://www.microburbs.com.au/report_generator/api/suburb/properties?suburb=Belmont+North", {
      method: "GET",
      headers: {
        Authorization: "Bearer test",
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();
    const fixedText = text.replace(/\bNaN\b/g, "null"); // replace NaN with null
    const data = JSON.parse(fixedText);

    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    return [];
  }
}
