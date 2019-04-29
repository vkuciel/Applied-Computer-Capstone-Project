const bookList = document.querySelector('#book-list');
const form = document.querySelector('#book-form');
const clist = document.querySelector('#cnamelist');

function renderBooks(doc){
    
    let div = document.createElement('div');
    div.style.cssText='padding:30px;';
    
    let BookTitle = document.createElement('div');
    let CourseNumber = document.createElement('div');
    let CourseTitle = document.createElement('div');
    let Edition = document.createElement('div');
    let FirstAuthor = document.createElement('div');
    let FirstPublisher = document.createElement('div');
    let FirstISBN = document.createElement('div');
    let Year = document.createElement('div');
    let edit = document.createElement('div');
    edit.style.cssText='padding:30px;background-image: url("editicon.png");';

    div.setAttribute("grid-item", doc.id);
    BookTitle.textContent = doc.data().BookTitle;
    CourseNumber.textContent = doc.data().CourseNumber;
    CourseTitle.textContent = doc.data().CourseTitle;
    Edition.textContent = doc.data().Edition;
    FirstAuthor.textContent = doc.data().FirstAuthor;
    FirstPublisher.textContent = doc.data().FirstPublisher;
    FirstISBN.textContent = doc.data().FirstISBN;
    Year.textContent = doc.data().Year;

    document.getElementById("book-list").appendChild(BookTitle);
    document.getElementById("book-list").appendChild(CourseNumber);
    document.getElementById("book-list").appendChild(CourseTitle);
    document.getElementById("book-list").appendChild(Edition);
    document.getElementById("book-list").appendChild(FirstAuthor);
    document.getElementById("book-list").appendChild(FirstPublisher);
    document.getElementById("book-list").appendChild(FirstISBN);
    document.getElementById("book-list").appendChild(Year);

    bookList.appendChild(div);

    //modify textbooks; change the text to input fields
    /*edit.addEventListener('click', e => 
    {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("grid-item");
        db.collection('textbooks').doc(id).update({
            CourseNumber: 'CIS130'
            });
    });*/
}

function renderTitles(doc){
    let option = document.createElement('option');

    let CourseTitle = document.createElement('option');

    option.setAttribute("courseOption", doc.id);
    CourseTitle.textContent = doc.data().CourseTitle;

        document.getElementById("cnamelist").appendChild(CourseTitle);
    }

db.collection('textbooks').orderBy('CourseTitle').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderTitles(doc);
    })
})

form.addEventListener('submit', e => 
{
    const book = document.getElementById("book-list");
    while (book.firstChild) {
    book.removeChild(book.firstChild);
    }

    e.preventDefault();
    const cname = form.cnamelist.value;
    const cnumber = form.cnumber.value;
    const csemester = form.csemester.value;
    
    db.collection('textbooks').where('CourseTitle', '==', cname).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderBooks(doc);
        })
    })
    db.collection('textbooks').where('CourseNumber', '==', cnumber).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderBooks(doc);
        })
    })
    db.collection('textbooks').where('Year', '==', csemester).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderBooks(doc);
        })
    })

    console.log('Form has been submitted');
});