function hidePost(el) {
    console.log("clcik");
    el.parentNode.parentNode.style.display = 'none';
}

function formSubmit() {
    console.log("submit");
    let image = document.forms["post-form"]["image"].value;
    let description = document.forms["post-form"]["description"].value;
    if (image == "" || description == "") {
        alert("Both fields required")
    } else {
        createPost(image, description);
    }
}

function createPost(image, description) {
    console.log("./assets/images/" + image)
    let picture = document.getElementsByClassName("post-picture")[0];
    let desc = document.getElementsByClassName("description")[0];
    let img = document.createElement("img");
    img.src = "./assets/images/" + image;
    let p = document.createElement("p");
    p.innerHTML = description;
    picture.appendChild(img);
    desc.appendChild(p);
    let post = document.getElementsByClassName("post")[0];
    post.style.display = 'inline';
}