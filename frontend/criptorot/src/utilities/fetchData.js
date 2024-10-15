import { urlAPI } from "./vars";

export async function encodeFetch({ text, key }) {
  const response = await fetch(urlAPI + "/cripto/encode", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ text, key }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.result;
  } else {
    alert("No se pudo realizar la solicitud al backend");
  }
}

export async function decodeFetch({ text, key }) {
  const response = await fetch(urlAPI + "/cripto/decode", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ text, key }),
  });

  if (response.ok) {
    const data = await response.json();
    return data.result;
  } else {
    alert("No se pudo realizar la solicitud al backend");
  }
}
