// makeLine(size) function

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#'
    }
    return line;;
}

console.log(makeLine(5))

// makeSquare(size) function

function makeSquare(side) {
    let square = '';
    for (let i = 0; i < side; i++) {
        square += (makeLine(side) + '\n');
    }
    return square.slice(0,-1);
}
console.log(makeSquare(5))

// makeRectangle(width, height) function

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5,3))

// makeDownwardStairs(height) function

function makeDownwardStairs(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeLine(i+1) + '\n')
    }
    return triangle.slice(0, -1)
}
console.log(makeDownwardStairs(5))

//makeSpaceLine(numSpaces, numChars) function

//make a function called makeSpaces and concatonate to makeLines

function makeSpace(size) {
    let space = ''
    for (i=0; i < size; i++) {
        space += ' '
    }
    return space
}

function makeSpaceLine(numSpaces, numChars) {
    return makeSpace(numSpaces) + makeLine(numChars) + makeSpace(numSpaces);
}

console.log(makeSpaceLine(3,5))

//make Isosceles Triangle

function makeIsoscelesTriangle(height) {
    let triangle = ''
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    } 
    return triangle
}

console.log(makeIsoscelesTriangle(5))

//make diamond

function Diamond(height) {
    let triangle = ''
    let reverseTriangle = ''
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n')
        reverseTriangle = triangle.split('\n').reverse().join('');
    } 
    return triangle
    return reverseTriangle
}

console.log(Diamond(5))

