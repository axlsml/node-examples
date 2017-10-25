var rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRect(l, b) {
    console.log("solving for rect with l=" + l + " and b=" + b);

    if (l <= 0 || b <= 0) {
        console.log("blabla 0");
    } else {
        console.log("area=" + rect.area(l, b));
        console.log("perimeter=" + rect.perimeter(l, b));
    }
}

solveRect(2, 3);
solveRect(3, 5);
solveRect(3, 0);
