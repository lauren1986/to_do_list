// Here we start the count of the items remaining (at 0).
// Then we designate where the new number of items will print out.

var numberItems = 0;
document.getElementById("remainingItems").innerHTML = numberItems;

// Now we start to grab the todo input by the user and add it to the table in a new row.

document.getElementById("addItem").onclick = function(){
	// grab the todo input in the input textbox
	var todoItem = document.getElementById("inputBox").value;
	// create a new HTML table row
	var myTableRow = document.createElement("tr");
	// make the new row a child of the table
	document.getElementById("tableList").appendChild(myTableRow);
	// create a column in the newly created row
	var  myTableData1 = myTableRow.appendChild(document.createElement("td"));
	// place the todo item entered in the column
	myTableData1.innerHTML = todoItem;
	// create a second column in the first row
	var myTableData2 = myTableRow.appendChild(document.createElement("td"));
	// add a checkbox to the second column by assigning type and class
	var checkBox1 = myTableData2.appendChild(document.createElement("input"));
		checkBox1.type = "checkbox";
		checkBox1.class = "completed";
	// create third column in the first row
	var myTableData3 = myTableRow.appendChild(document.createElement("td"));
	// add a checkbox to the third column by assigning type and class
	var checkBox2 = myTableData3.appendChild(document.createElement("input"));
		checkBox2.type = "checkbox";
		checkBox2.class = "remove";
	// increment the number of items
	numberItems += 1;
	// modify text of #remainingItems to modified total of to do items
	document.getElementById("remainingItems").innerHTML = numberItems;
};

