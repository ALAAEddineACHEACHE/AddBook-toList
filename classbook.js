class Book{
    constructor(title,author,isbn) {
        this.title=title;
        this.author=author;
        this.isbn=isbn
    }
}
$(document).ready(function(){
class UI{
    addBooktoList(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="" class="delete"></a></td>
        `;
        list.appendChild(row);
    }

    showAlert(message,type){
        const container = document.getElementById('container');
        const form = document.getElementById('add-book');
        const div = document.createElement('div');
        div.className=`alert alert-${type}`;
        div.innerText=message;
        container.insertBefore(div,form);
        setTimeout(function(){
            div.remove();
        },3000);
    }

}
    const deletes = document.getElementsByClassName('delete');
    let button = document.querySelector(".btn");
    button.addEventListener('click',function(event){
        event.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let isbn = document.getElementById('isbn').value;
        let UI =0;
        if (title == "" || author == "" || isbn == ""){
            UI.showAlert('Please fill in all inputs','error');
        } else{
            let book = new Book(title,author,isbn);
            UI.addBooktoList(book);
            UI.showAlert('Added Successfully','');

        }
    },false)
    Array.from(deletes).forEach(function(){
        this.addEventListener('click',function(){
            this.parent.remove();
        })
    })

  
    let boutton = document.getElementsByClassName("btn");
    boutton.addEventListener('click',function(event){
        event.preventDefault();
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let isbn = document.getElementById('isbn').value;
        
        let UI = new UI();
        if (title == "" || author == "" || isbn == ""){
            UI.showAlert('Please fill in all inputs','error');
        }else{
            let book = new Book(title,author,isbn);
            UI.addBooktoList(book);
            UI.showAlert('Added Successfully','');
        }
    });
    
})