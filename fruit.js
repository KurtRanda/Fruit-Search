//given code
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
    'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
    'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 
    'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 
    'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
    'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 
    'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 
    'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 
    'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 
    'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 
    'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 
    'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 
    'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 
    'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

//Filter the fruit array based on input string and returns results
function search(str) {
    let results = [];
    if (str.length > 0) {
        results = fruit.filter(f => f.toLowerCase().includes(str.toLowerCase()));
    }
    return results;
}

//Function to be called whenever a key is pressed in the input. Performs search and shows suggestions
function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

//updates suggestion list based on results
function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';
    if (results.length > 0) {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('mouseover', highlightSuggestion);//step 8 highlight suggestion
            li.addEventListener('mouseout', removeHighlight);
            suggestions.appendChild(li);
        });
    }
}

function highlightSuggestion(e) {
    removeHighlight();
    e.target.classList.add('autocomplete-active');
}

function removeHighlight() {
    const items = document.querySelectorAll('.suggestions ul li');
    items.forEach(item => {
        item.classList.remove('autocomplete-active');
    });
}

// handles the click event on a suggestion, updates input value accordingly
function useSuggestion(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
        input.value = e.target.textContent;
        suggestions.innerHTML = '';
    }
}

input.addEventListener('keyup', searchHandler); //keystroke listener
suggestions.addEventListener('click', useSuggestion);//step 9 allows you to select fruit with a mouse click
