import './style.css'
let url1 = "http://localhost:3000/posts"
let url2 = "http://localhost:3000/comments"
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}
let body = document.querySelector("body");
let ul1 = document.createElement("ul")
let ul2 = document.createElement("ul")

fetch(url1,options)
.then((response) => response.json())
.then(
  (data) => {
    data.forEach(element => {
      let li = document.createElement("li");
      li.textContent = `${element["id"]} ${element["title"]} ${element["author"]} `;
      ul1.append(li);
      body.append(ul1);
    });
  }
).catch((error) => {
  console.log(error);
})
fetch(url2,options)
.then((response) => response.json())
.then(
  (data) => {
    data.forEach(element => {
      let li = document.createElement("li");
      li.textContent = `${element["id"]} ${element["body"]} ${element["postId"]} `;
      ul2.append(li);
      body.append(ul2);
    });
  }
).catch((error) => {
  console.log(error);
})
