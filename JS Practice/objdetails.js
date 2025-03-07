const book = {
    title : 'Java Script Guide',
    author : 'John Doe',
    pages : 300
};

function getObjectDetails(book){
    console.log(Object.keys(book));
    console.log(Object.values(book));
    console.log(Object.entries(book));
}

getObjectDetails(book);



