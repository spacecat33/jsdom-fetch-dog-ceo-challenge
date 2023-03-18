console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// One
function fetchImage() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImage(json));
}

function renderImage(json) {
    const ul = document.createElement('ul');
    document.querySelector("#dog-image-container").append(ul);
    json.message.forEach(e => {
        const li = document.createElement('li');
        li.innerHTML = `<img src= ${e}>`;
        ul.append(li);
    });
}

// Two

const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => breedList(json));
}

function breedList(json) {
    const ul = document.querySelector("#dog-breeds");
    for (let key in json.message) {
        const li = document.createElement('li');
        if (json.message[key].length > 0) {
            json.message[key].forEach(e => {
                li.innerHTML = `${e} ${key}`;
                li.className = "breed";
                ul.append(li);
            })
        }
        else {
            li.innerHTML = `${key}`;
            li.className = "breed";
            ul.append(li);
        };
    };


// Three

    ul.addEventListener('click', e => {
        e.target.style.color = 'blue';
    })
}



// Four

function filterBreeds() {
    const breedDropdown = document.querySelector("#breed-dropdown")
    breedDropdown.value = "";
	breedDropdown.addEventListener('change', e => {
		document.querySelectorAll('.breed').forEach(element => {
			if (element.innerText.toLowerCase().charAt(0) == e.target.value) {
				element.style.display = "block";
			}
			else {
				element.style.display = "none";
			}
		})
	})
}

document.addEventListener('DOMContentLoaded', e => {
    fetchImage();
    fetchBreeds();
    filterBreeds();
});