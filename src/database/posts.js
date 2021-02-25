
function data_fetch() {

  const get_remote = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data_json = await response.json();
    console.log("data_json >>>",data_json);
    return data_json
  }

  // let data = fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => console.log(json));

  return get_remote();
}
export default data_fetch;
