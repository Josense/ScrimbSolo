const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const contentEl = document.getElementById("content")

function renderPost(post) {
    return `
        <div class="instagram-post">
            <div class="post-author-info">
                <img class="avatar" src=${post.avatar} />
                <div class="post-author-text-area">
                    <p>${post.name}</p>
                    <p class="address">${post.location}</p>
                </div>
            </div>
            <img class="post-img" src=${post.post} />
            <div class="footer">
                <div class="post-action-btns">
                    <img class="post-action-icon" src="images/icon-heart.png" />
                    <img class="post-action-icon" src="images/icon-comment.png" />
                    <img class="post-action-icon" src="images/icon-dm.png" />
                </div>
                <p>${post.likes} likes</p>
                <p>${post.username} <span>${post.comment}</span></p>
            </div>
    
        </div>
    `
}

let contentHtml = ""
for (let i = 0; i < posts.length; i++) {
    contentHtml += renderPost(posts[i])
}

contentEl.innerHTML = contentHtml

