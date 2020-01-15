let list = [
    { author: 'Bill Gates', title: 'The Road Ahead' },
    { author: 'Steve Jobs', title: 'Walter Isaacson' },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games'}
   ]

//    let ketQua = document.getElementById("result")
   function displayInfor(){
   var infor = document.getElementById('searchInput').value;
   let inforAuthor = document.getElementById("inforAuthor")
   let inforTitle = document.getElementById("inforTitle")
   list.map(item =>{
       if(item.author === infor || item.title === infor)
       inforTitle.innerHTML = `Tên sách: ${item.title}`
       inforAuthor.innerHTML = `Tác giả: ${item.author}`
   })
}