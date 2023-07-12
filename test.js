var scryfall = require("scryfall-client");
scryfall.search("o:vigilance t:equipment").then(function (list) {
    list.has_more; // whether or not there is an additional page of results, `true` or `false`
    list.total_cards; // the total number of cards returned from search
  
    var names = list.map(function (card) {
      // the list object can use any Array method
      return card.name
      ;

    });
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
  });
