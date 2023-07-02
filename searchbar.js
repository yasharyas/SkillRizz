// Define the list of technology specializations
const specializations = [
    'AI',
    'Blockchain',
    'DevOps',
    'Full Stack',
    'Cloud',
  ];
  
  // Get the search input element
  const searchInput = document.querySelector('.searchbar-input');
  
  // Create a function to handle the input event
  function handleInput() {
    const searchText = searchInput.value.toLowerCase();
    const suggestions = specializations.filter(specialization =>
      specialization.toLowerCase().includes(searchText)
    );
  
    // Display the suggestions
    displaySuggestions(suggestions);
  }
  
  // Create a function to handle the Enter key press event
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const searchText = searchInput.value.toLowerCase();
      const closestMatch = specializations.find(specialization =>
        specialization.toLowerCase().startsWith(searchText)
      );
  
      if (closestMatch) {
        searchInput.value = closestMatch;
      }
    }
  }
  
  // Create a function to display the suggestions
  function displaySuggestions(suggestions) {
    // Get the suggestions container element
    const suggestionsContainer = document.querySelector('.suggestions-container');
  
    // Clear the previous suggestions
    suggestionsContainer.innerHTML = '';
  
    // Create and append suggestion elements
    suggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.classList.add('suggestion');
      suggestionElement.textContent = suggestion;
      suggestionsContainer.appendChild(suggestionElement);
    });
  }
  
  // Attach the input event listener to the search input
  searchInput.addEventListener('input', handleInput);
  
  // Attach the key press event listener to the search input
  searchInput.addEventListener('keypress', handleKeyPress);
  