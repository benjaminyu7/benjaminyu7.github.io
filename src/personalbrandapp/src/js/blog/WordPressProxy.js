export async function getPosts() {
    return await fetch('https://public-api.wordpress.com/rest/v1.1/sites/dragon246rider.wordpress.com/posts/?fields=ID,title')
        .then(response => response.json())
}

export async function getPost(id) {
    return await fetch('https://public-api.wordpress.com/rest/v1.1/sites/dragon246rider.wordpress.com/posts/' + id)
        .then(response => response.json())
}