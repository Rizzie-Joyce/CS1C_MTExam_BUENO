let createdlist = prompt (
Do you want to create a grocery list?(y/n)");

if(createdlist. toLowerCase() =as 'y' ){
let numItems = parseInt (prompt (
"How many items are in your grocery list?"));
let groceryList = [];
for (let 1 = 0; 1 < numItems; i++){
let item = prompt("Enter item");
groceryList.push(item) ;
}
let groceryListSort = groceryList.toSorted);
let groceryListReverse = groceryList .toReversed) :
alert(Grocery List: In $(groceryList));
alert(Sorted Grocery List: In S(groceryListSort));
alert(Reversed Grocery List: in $(groceryListReverse})
} else
alert("Grocery List Cancelled.");
}
