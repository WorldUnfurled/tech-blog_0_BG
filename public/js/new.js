const newHandler = async e => {
    e.preventDefault();

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;

    await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          content
        }),

        headers: { 'Content-Type': 'application/json' }

    });

    document.location.replace('/dashboard');
}

const newPost = document.querySelector('#new-post');

newPost.addEventListener('submit', newHandler);