export const fetchIsThisACat = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("http://localhost:8000/isthisacat/", {
    method: "PUT",
    headers: { "Content-Type": "image/jpeg" },
    body: formData,
  });
  return await response.json();
};
