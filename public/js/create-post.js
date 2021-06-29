// define function to create post
const createPostHandler = async (event) => {
    event.preventDefault();
  
    // collect inputs
    const title = document.querySelector('#create-post-title').value.trim();
    const content = document.querySelector('#create-post-content').value.trim();
    // console.log(title, content);
    
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // redirect to dashboard if post creation is successful
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // listen for submit
  document.querySelector('.post-form').addEventListener('submit', createPostHandler);