let URL = "http://46.101.217.16:4000/";

//function makeOptions(method, body) {
// var opts = {
// method: method,
// headers: {
// "Content-type": "application/json"
//}
//};
// if (body) {
//  opts.body = JSON.stringify(body);
//}
//return opts;
//}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  function getRecipes() {
    const links = [
      "Slow cooker spicy chicken and bean soup",
      "Smoked paprika goulash for the slow cooker",
      "slow cooker beef stew",
      "Pistachio chicken with pomegranate sauce",
      "Cheesy leek and mustard soup",
      "Christmas Stollen",
      "Polly's eccles cakes",
      "Braised beef in red wine",
      "Moist garlic roasted chicken",
      "Cheese and bacon stuffed pasta shells",
      "Tofu vindaloo"
    ];
    var recipes = [];

    for (var i = 0; i < 11; i++) {
      var rec = links[i];
      recipes.push(fetch(URL + "/recipe/" + rec).then(handleHttpErrors));
    }
    return recipes;
  }

  return {
    getRecipes
  };
}
const returnValue = apiFacade();
export default returnValue;
