export const url = " https://itunes.apple.com";

export default async function fetchData(_url) {
  try {
    const response = await fetch(_url);
    // console.log(response);
    const result = await response.text();
    // Traitement optionnel des données (par exemple, JSON.parse)
    const data = JSON.parse(result); // En supposant que la réponse est JSON
    // console.log(data);
    return data; // Renvoyer les données à utiliser dans votre composant
  } catch (error) {
    console.error(error);
    return null; // Ou gérer les erreurs différemment (par exemple, lancer une erreur)
  }
}
