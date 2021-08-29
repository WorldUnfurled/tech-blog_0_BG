const commentHandler = async e => {
    e.preventDefault();

    const post_id = document.querySelector('#comment-post-id').value;
    const content = document.querySelector('#comment-content').value;

    if (content) {
        await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            content
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        document.location.reload();
    }
}

const newComment = document.querySelector('#new-comment');
newComment.addEventListener('submit', commentHandler);