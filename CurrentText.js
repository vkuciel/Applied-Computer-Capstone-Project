const bookList = document.querySelector('#book-list');

function renderList(doc){
	let li = document.createElement('li');
	let BookTitle = document.createElement('span');
	let CourseNumber = document.createElement('span');
	let CourseTitle = document.createElement('span');
	let Edition = document.createElement('span');
	let FirstAuthor = document.createElement('span');
	let FirstPublisher = document.createElement('span');
	let FirstISBN = document.createElement('span');
	let Year = document.createElement('span');
	
	li.setAttribute('data-id', doc.id);
	Year.textContent = doc.data().Year + ' ' + doc.data().CourseTitle + ' '+doc.data().CourseNumber;
	
	
	Edition.textContent = doc.data().FirstAuthor+' '+doc.data().Edition;
	FirstPublisher.textContent = doc.data().BookTitle+' '+doc.data().FirstPublisher;
	FirstISBN.textContent = doc.data().FirstISBN;
	
	li.appendChild(Year);
	li.appendChild(CourseTitle);
	li.appendChild(CourseNumber);
	li.appendChild(Edition);
	li.appendChild(FirstAuthor);
	li.appendChild(FirstPublisher);
	li.appendChild(BookTitle);
	li.appendChild(FirstISBN);
	
	bookList.appendChild(li);
   }

db.collection('textbooks').get().then((snapshot) =>{
	snapshot.docs.forEach(doc =>{
		renderList(doc);
	})
})