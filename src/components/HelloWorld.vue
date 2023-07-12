<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      trying something new
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

var scryfall = require("scryfall-client");
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
scryfall.search("(in:dmu or in:dmc or in:leg) and c=r", {order: "usd"}).then(function (list) {
  list.has_more; // whether or not there is an additional page of results, `true` or `false`
  list.total_cards; // the total number of cards returned from search

  var names = list.map(function (card) {
    // the list object can use any Array method
    return [card.getImage("small"), card.name, card.getPrice("usd")];
  });

  /*let list1 =document.getElementById("mylist1");
  for (let i = 0; i < names.length; i++) {
    let li1 = document.createElement('li');
    li1.innerText = names[i]
    list1.appendChild(li1);
    }*/

      var headers = ["Picture", "Name", "Price"];
      var table = document.createElement("TABLE");  //makes a table element for the page
      
          
      for(let i = 0; i < names.length; i++) {
          var src = names[i][0],
                img = document.createElement('img'),
                row = table.insertRow(i);
                img.src = src;
            
          row.insertCell(0).innerHTML = "<img src=\""+img.src+" width=\"600px\" height=\"200px\">";
          row.insertCell(1).innerHTML = names[i][1];
          row.insertCell(2).innerHTML = "$"+names[i][2];
      }

      var header = table.createTHead();
      var headerRow = header.insertRow(0);
      for(var i = 0; i < headers.length; i++) {
          headerRow.insertCell(i).innerHTML = headers[i];
      }

      document.body.append(table);
      
  
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
