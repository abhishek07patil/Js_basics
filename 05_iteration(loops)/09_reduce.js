const mynum = [1, 2, 3]

const myTotal = mynum.reduce( (acc,currval) => {
    // console.log(`acc : ${acc}, currval: ${currval} `);
    return acc + currval
}, 4)

// console.log(myTotal);


const cartShoping = [
    {
        course: "js course",
        prise: 2999
    },
    {
        course: "py course",
        prise: 999
    },
    {
        course: "java course",
        prise: 5999
    },
    {
        course: "data science course",
        prise: 12999
    },
]

const mycartShoping = cartShoping.reduce( (acc, item) => {
    // console.log(`acc : ${acc}, currval: ${item.prise} `);

    return acc + item.prise   
}, 0)

// console.log(mycartShoping);