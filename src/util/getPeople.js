export default async function getPeople(url) {
  try{
    let response = await fetch(url);
    if (!response.ok) throw new Error('Network problem - response not ok');
    response = await response.json();
    return response.results;
  } catch (err) {
    err.message = 'tytyttytyty';
    return err;
    // console.log('error on fetch: ', err.message);
  }
}
