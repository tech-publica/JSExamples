var colours = ['red', 'green', 'blue'];
document.getElementById('myButton').addEventListener('click', function() {
    // this is a reference to the element clicked on

    var that = this;

    colours.forEach(function() {
        // this is undefined
        console.log(this);
        // that is a reference to the element clicked on
        console.log(that);
    });
});


document.getElementById('myButton').addEventListener('click', function() {
    // this is a reference to the element clicked on

    var that = this;

    colours.forEach( () => {
        console.log("with lambda " , this);
        console.log("with lambda " , that);
    });
});