export async function getProcess(process) {
  try {
    const response = await fetch(`http://localhost:3000/${process}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Erro ao buscar os artigos");
    }
  } catch (error) {
    throw new Error(error.message);
  }
}