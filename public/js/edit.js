const post_id = document.querySelector('#edit-id').value;

const editHandler = async e => {
    e.preventDefault();

    const title = document.querySelector('#edit-title').value;
    const content = document.querySelector('#edit-content').value;

    console.log('hi');

    await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    });
    
    document.location.replace('/dashboard');
}

const deleteHandler = async () => {
    await fetch(`/api/post/${post_id}`, {
        method: 'DELETE'
    });
    console.log('hi');
    document.location.replace('/dashboard');
}

const editPost = document.querySelector('#edit-post');
editPost.addEventListener('submit', editHandler);

const deletePost = document.querySelector('#delete-btn');
deletePost.addEventListener('click', deleteHandler);