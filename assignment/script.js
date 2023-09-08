let currentPersonIndex = 0;
let allDataDisplayed = false;
let itemCount = 0;

function fetchDataAndDisplay() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const olElement = document.querySelector('ol');
            function displayCurrentPerson() {
                const itemCountElement = document.getElementById('itemCount');
                const currentPerson = data[currentPersonIndex];
                const liElement = document.createElement('li');
                liElement.className = 'MainBox';
                liElement.innerHTML = `<div class="sno">${currentPerson.id}</div>
                                       <div class="InfoBox">
                                           <span class="pName">Name: ${currentPerson.name}</span>
                                           <span class="pLoc">Location: ${currentPerson.location}</span>
                                       </div>`;
                olElement.appendChild(liElement);

                currentPersonIndex++;
                itemCount++;

                itemCountElement.textContent = `CURRENTLY ${itemCount} PEOPLE SHOWING`;

                if (currentPersonIndex >= data.length) {
                    currentPersonIndex = 0;
                    allDataDisplayed = true;
                    alert('All people displayed.');
                }
            }

            displayCurrentPerson();

            const nextPersonButton = document.querySelector('.btn');
            nextPersonButton.addEventListener('click', () => {
                if (!allDataDisplayed) {
                    displayCurrentPerson();
                } else {
                    alert('All people have already been displayed.');
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

window.addEventListener('load', fetchDataAndDisplay);
