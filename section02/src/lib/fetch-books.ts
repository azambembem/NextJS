export default async function fetchBooks(): Promise<Book[]> {
  const url = "http://localhost:12345/api";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
}
