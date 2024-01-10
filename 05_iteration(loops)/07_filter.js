// const coding = ["js", "cpp", "py", "java", "rb"]

// const newCoding = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(newCoding);          //for each not return the value 


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (num) => num > 4)   // filter return values

// const newNums = myNums.filter( (num) => {
//     return num > 4           // curly bracket use return key world
// })                           // filter return values

// console.log(newNums);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);


const books = [
    { title: 'Book one', genere: 'Finction', publish: 1981,
    edition: 2004},
    { title: 'Book two', genere: 'Non-Finction', publish: 1992,
    edition: 2008},
    { title: 'Book three', genere: 'History', publish: 1999,
    edition: 2007},
    { title: 'Book four', genere: 'Non-Finction', publish: 1989,
    edition: 2010},
    { title: 'Book five', genere: 'Science', publish: 2009,
    edition: 2014},
    { title: 'Book six', genere: 'Finction', publish: 1987,
    edition: 2010},
    { title: 'Book seven', genere: 'History', publish: 1986,
    edition: 2096},
    { title: 'Book eight', genere: 'Science', publish: 2011,
    edition: 2016},
]

// const userBooks = books.filter( (bk) => {
//     return bk.genere === 'History'   
// })
const userBooks = books.filter( (bk) => {
    return bk.publish >= 2000   
})
console.log(userBooks);