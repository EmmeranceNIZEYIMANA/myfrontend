const db = require('./db')
// ✅ GET: Retrieve all books
const SelectBook = (req, res) => {
  
    db.query('SELECT * FROM book', (err, results) => {
      
      if (err) {
        console.error('Failed to retrieve books:', err);
        return res.status(500).json({ error: 'Failed to retrieve books' });
      }
      res.status(200).json(results);
    });
  }
  
  // ✅ POST: Add a new book
  const InsertBook=(req, res) => {
    const { bookname, bookage, booklanguage } = req.body;
  
    // Query to insert new book into the table
    const query = 'INSERT INTO book (bookname, bookage, booklanguage) VALUES (?, ?, ?)';
    
    // Insert query execution
    db.query(query, [bookname, bookage, booklanguage], (err, result) => {
      if (err) {
        console.error('Insert failed:', err);
        return res.status(500).json({ error: 'Failed to insert book' });
      }
      res.status(201).json({
        message: 'Book inserted successfully',
        bookid: result.insertId
      });
    });
  };
  
  // ✅ PUT: Update a book by ID
  const UpdateBook =(req, res) => {
    const { id } = req.params;
    const { bookname, bookage, booklanguage } = req.body;
  
    // Query to update book information based on ID
    const query = 'UPDATE book SET bookname = ?, bookage = ?, booklanguage = ? WHERE bookid = ?';
    
    // Update query execution
    db.query(query, [bookname, bookage, booklanguage, id], (err, result) => {
      if (err) {
        console.error('Update failed:', err);
        return res.status(500).json({ error: 'Failed to update book' });
      }
      res.status(200).json({ message: 'Book updated successfully' });
    });
  }
  
  // ✅ DELETE: Delete a book by ID
  const DeleteBook = (req, res) => {
    const { id } = req.params;
  
    // Query to delete a book by ID
    const query = 'DELETE FROM book WHERE bookid = ?';
    
    // Delete query execution
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Delete failed:', err);
        return res.status(500).json({ error: 'Failed to delete book' });
      }
      res.status(200).json({ message: 'Book deleted successfully' });
    
  }
)};


  module.exports={UpdateBook,DeleteBook,InsertBook,SelectBook}