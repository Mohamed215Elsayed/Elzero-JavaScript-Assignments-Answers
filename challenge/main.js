/*===========================================
== Variables And Concatenation Challenge ==
===========================================*/

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat
let [Title_content, Description_content, Date_content] = ["Elzero", "Elzero Web School", "25/10"];
let markup = `
<div class="card">
    <div class="child">
        <h3>${Title_content}</h3>
        <p>${Description_content}</p>
        <Span>${Date_content}</span>
    </div>
</div>
`;
/***************solution 1*/
document.write(markup.repeat(4));//1
/***************solution 2*/
document.body.innerHTML = markup.repeat(4);//2 dont consider way
/***************solution 3*/
// [3] Add This Card To Page 4 Times  //3
for (let i = 0; i < 4; i++) {
    let newCard = document.createElement('div');
    newCard.innerHTML = markup;
    document.body.appendChild(newCard);
}
/***************solution 4*/
// this solution is bad all existed in same page
let data = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Learn JavaScript</title>
    </head>
    <body> 
    <script src="main.js"></script>
    <div class="card">
        <h3> hello Elzero</h3>
        <p>Elzero Web School</p>
        <span> 25/10 </span>
    </div>
    <div class="card">
        <h3> hello Elzero</h3>
        <p>Elzero Web School</p>
        <span> 25/10 </span>
    </div>
    <div class="card">
        <h3> hello Elzero</h3>
        <p>Elzero Web School</p>
        <span> 25/10 </span>
    </div>
    <div class="card">
        <h3> hello Elzero</h3>
        <p>Elzero Web School</p>
        <span> 25/10 </span>
    </div>
    <div class="card">
        <h3> hello Elzero</h3>
        <p>Elzero Web School</p>
        <span> 25/10 </span>
    </div>
    </body>
</html>`;
// console.log(data);
/***************solution 5*/
// second solution is bad all existed in same page
let card = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Learn JavaScript</title>
</head>
<body>
<template id="card-template">
    <div class="card">
        <h3>hello Elzero</h3>
        <p>Elzero Web School</p>
        <span>25/10</span>
    </div>
</template>
<div id="card-container"></div>

<script>
    // Get the template content
    const template = document.querySelector('#card-template').content;
    // Get the container element
    const container = document.querySelector('#card-container');
    // Repeat the template and append it to the container
    for (let i = 0; i < 4; i++) {
        const clone = document.importNode(template, true);
        container.appendChild(clone);
        }
</script>
</body>
</html> `;
console.log(card);
/************************************ */

