const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem('token'); 
  

  try {
    const response = await fetch('http://localhost:5000/insertbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({ bookname, bookage, booklanguage })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Book added successfully!');
      setBookname('');
      setBookage('');
      setBooklanguage('');
    } else {
      alert(data.error || 'Failed to add book');
    }
  } catch (error) {
    console.error('Error adding book:', error);
    alert('An error occurred. Please try again.');
  }
};
