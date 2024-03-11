export interface CatClassifierResult {
  success: boolean;
  confidence: number;
  info: string;
}

export const fetchIsThisACat = async (
  file: File
): Promise<CatClassifierResult | Error> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:8000/isthisacat/", {
      method: "POST",
      body: formData,
    });
    return await response.json();
  } catch (err) {
    return Error(String(err));
  }
};
