export function formatNumber(number = 0) {
  return number
    .toLocaleString("en-US", { minimumFractionDigits: 0 })
    .replace(/,/g, ".");
}

export function getToken() {
  const initialHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ...initialHeaders,
    },
  };
}

export async function getDataUriFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const dataUri = reader.result;
      const fileName = file.name;
      resolve({ dataUri, fileName });
    });
    reader.readAsDataURL(file);
  });
}

export function checkValidDataUri(dataUri) {
  const str = dataUri.replace("data:", "").replace(/^.+,/, "");
  return str.length % 4 == 0 && /^[A-Za-z0-9+/]+[=]{0,2}$/.test(str);
}
