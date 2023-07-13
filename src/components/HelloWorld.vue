

<template>
    <p>What Set?</p>
    <p>
      <input v-model="message" placeholder="edit me" />
    </p>
      What Color: {{ picked }}
      <input type="radio" id="color" value="White" v-model="picked" />
      <label for="white">White</label>
      <input type="radio" id="color" value="Blue" v-model="picked" />
      <label for="blue">Blue</label>
      <input type="radio" id="color" value="Black" v-model="picked" />
      <label for="black">Black</label>
      <input type="radio" id="color" value="Red" v-model="picked" />
      <label for="red">Red</label>
      <input type="radio" id="color" value="Green" v-model="picked" />
      <label for="green">Green</label>
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
</template>

<script setup>
import { ref } from 'vue'

const picked = ref('White')

function scry_call() {
      var scryfall = require("scryfall-client");
      scryfall.search("(in:dmu or in:dmc or in:leg) and c="+picked.value, {order: "usd"}).then(function (list) {
        list.has_more; // whether or not there is an additional page of results, `true` or `false`
        list.total_cards; // the total number of cards returned from search


      var names = list.map(function (card) {
        // the list object can use any Array method
        return [card.getImage("small"), card.name, card.getPrice("usd")];
      });

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
    }
    scry_call();
//var color = document.getElementsByName("color");
//window.alert(color)
//color.addEventListener("click", window.alert(color));

/*color.addEventListener("click", window.alert(color));function(event){ 
    if(event.target.type == 'radio'){
       //scry_call();
       
      }

})
;*/

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
