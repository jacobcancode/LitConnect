import { pythonURI, fetchWithRetry, API_CONFIG } from './config.js';

// Class to handle book API interactions
export class BookAPI {
  constructor() {
    this.baseUrl = `${pythonURI}/api/books`;
  }

  // Get all books with pagination
  async getBooks(page = 1, limit = 10) {
    try {
      return await fetchWithRetry(
        `${this.baseUrl}?page=${page}&limit=${limit}`, 
        { method: 'GET' },
        true // enable caching
      );
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }

  // Get a single book by ID
  async getBook(id) {
    try {
      return await fetchWithRetry(
        `${this.baseUrl}/${id}`, 
        { method: 'GET' },
        true // enable caching
      );
    } catch (error) {
      console.error(`Error fetching book ${id}:`, error);
      throw error;
    }
  }

  // Search books by title, author, or genre
  async searchBooks(query) {
    try {
      return await fetchWithRetry(
        `${this.baseUrl}/search?q=${encodeURIComponent(query)}`, 
        { method: 'GET' },
        true // enable caching
      );
    } catch (error) {
      console.error('Error searching books:', error);
      throw error;
    }
  }

  // Add a book to the user's reading list
  async addToReadingList(bookId, userId) {
    try {
      return await fetchWithRetry(
        `${pythonURI}/api/users/${userId}/reading-list`, 
        {
          method: 'POST',
          body: JSON.stringify({ bookId }),
        }
      );
    } catch (error) {
      console.error('Error adding book to reading list:', error);
      throw error;
    }
  }

  // Remove a book from the user's reading list
  async removeFromReadingList(bookId, userId) {
    try {
      return await fetchWithRetry(
        `${pythonURI}/api/users/${userId}/reading-list/${bookId}`, 
        { method: 'DELETE' }
      );
    } catch (error) {
      console.error('Error removing book from reading list:', error);
      throw error;
    }
  }

  // Get user's reading list
  async getReadingList(userId) {
    try {
      return await fetchWithRetry(
        `${pythonURI}/api/users/${userId}/reading-list`, 
        { method: 'GET' },
        true // enable caching
      );
    } catch (error) {
      console.error('Error fetching reading list:', error);
      throw error;
    }
  }

  // Add a review for a book
  async addReview(bookId, review) {
    try {
      return await fetchWithRetry(
        `${this.baseUrl}/${bookId}/reviews`, 
        {
          method: 'POST',
          body: JSON.stringify(review),
        }
      );
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  }

  // Get all reviews for a book
  async getReviews(bookId) {
    try {
      return await fetchWithRetry(
        `${this.baseUrl}/${bookId}/reviews`, 
        { method: 'GET' },
        true // enable caching
      );
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  }
}

// Helper functions for rendering books
export const bookHelpers = {
  // Create a book card element
  createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.id = book.id;

    // Create book cover image or placeholder
    const imageUrl = book.coverImage || 'path/to/default-cover.jpg';
    const imgContainer = document.createElement('div');
    imgContainer.className = 'book-card-image';
    imgContainer.style.backgroundImage = `url(${imageUrl})`;
    
    // Create content container
    const content = document.createElement('div');
    content.className = 'book-card-content';
    
    // Add title
    const title = document.createElement('h3');
    title.className = 'book-card-title';
    title.textContent = book.title;
    
    // Add author
    const author = document.createElement('div');
    author.className = 'book-card-author';
    author.textContent = book.author;
    
    // Add description (shortened)
    const description = document.createElement('p');
    description.className = 'book-description';
    description.textContent = book.description && book.description.length > 100 
      ? book.description.substring(0, 100) + '...' 
      : book.description || '';
    
    // Add action buttons
    const actions = document.createElement('div');
    actions.className = 'book-card-actions';
    
    const readButton = document.createElement('button');
    readButton.className = 'btn btn-primary';
    readButton.textContent = 'Read Now';
    readButton.addEventListener('click', () => {
      window.location.href = `/books/${book.id}`;
    });
    
    const addToListButton = document.createElement('button');
    addToListButton.className = 'btn';
    addToListButton.textContent = '+ Add to List';
    addToListButton.addEventListener('click', async (e) => {
      e.preventDefault();
      // Check if user is logged in
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('Please log in to add books to your reading list');
        return;
      }
      
      try {
        const bookApi = new BookAPI();
        await bookApi.addToReadingList(book.id, userId);
        addToListButton.textContent = '✓ Added';
        addToListButton.disabled = true;
      } catch (error) {
        console.error('Error adding to reading list:', error);
        alert('Failed to add book to reading list. Please try again.');
      }
    });
    
    // Assemble the card
    actions.appendChild(readButton);
    actions.appendChild(addToListButton);
    
    content.appendChild(title);
    content.appendChild(author);
    content.appendChild(description);
    content.appendChild(actions);
    
    card.appendChild(imgContainer);
    card.appendChild(content);
    
    return card;
  },
  
  // Render a grid of books
  renderBookGrid(books, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Create grid
    const grid = document.createElement('div');
    grid.className = 'book-grid';
    
    // Add each book card
    books.forEach(book => {
      const card = this.createBookCard(book);
      grid.appendChild(card);
    });
    
    container.appendChild(grid);
  },
  
  // Initialize pagination
  initPagination(totalBooks, limit, currentPage, containerId, onPageChange) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    const totalPages = Math.ceil(totalBooks / limit);
    
    // Create pagination container
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    
    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'btn pagination-prev';
    prevButton.textContent = '←';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    });
    
    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'btn pagination-next';
    nextButton.textContent = '→';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    });
    
    // Page info
    const pageInfo = document.createElement('span');
    pageInfo.className = 'pagination-info';
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    // Assemble pagination
    pagination.appendChild(prevButton);
    pagination.appendChild(pageInfo);
    pagination.appendChild(nextButton);
    
    container.appendChild(pagination);
  }
}; 