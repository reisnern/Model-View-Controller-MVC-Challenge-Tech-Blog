// define function to logout
const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    // redirect to homepage if logout is successful
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  // listen for click
  document.querySelector('#logout').addEventListener('click', logoutHandler);