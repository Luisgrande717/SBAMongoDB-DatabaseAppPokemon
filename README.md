# SBAMongoDB-DatabaseAppPokemon
In this databaseApp you will input (POST) any Kanto 151 pokemon ***Just add 1 - 6 pokemon *** ****USE Thunder Client***
Example JSON format: 
"pokemonName" : "String"
      
"pokemonType" : "Sting"
  
"pokemonLevel" : Number

Then you can use GET to call back the pokemon youve entered
In addition use PATCH to update any pokemon by ID while using Json format
Lastly use DELETE to delete any pokemon simply using ID aswell

example 
[PATCH] localhost:3000/pokemon/"enter ID here"
"pokemonLevel" : 22
[DELETE] localhost:3000/pokemon/"enter ID here"

