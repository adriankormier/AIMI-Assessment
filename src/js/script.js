const imageLibrary = [
  'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
  'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
  'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
  'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
  'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
  'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',
];

// How many images you would like to display on page load;
const boxes = 20;

const generateBoxes = () => {
  let count = 0;
  const main = document.getElementById('main-container');

  // Create observer looking at (invisible) footer element. Loads more images upon nearing bottom of page.
  const intersectionObserver = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    createCard();
    createCard();
    createCard();
    createCard();
  });
  intersectionObserver.observe(document.querySelector('#footer'));

  // Create cards with checkboxes and labels, used to detect when a selection has been made.
  const createCard = () => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('name', `box${count}`);
    checkbox.setAttribute('id', `box${count}`);
    checkbox.setAttribute('type', 'checkbox');

    const label = document.createElement('label');
    label.setAttribute('for', `box${count}`);
    label.setAttribute('alt', `Image number ${count + 1}`);
    label.style.backgroundImage = `url(${
      imageLibrary[count % imageLibrary.length]
    })`;

    const icon = document.createElement('span');
    icon.textContent = 'fullscreen';
    icon.setAttribute('class', 'material-symbols-outlined');

    card.append(checkbox);
    card.append(label);
    card.append(icon);
    main.append(card);
    count += 1;
  };

  while (count < boxes) createCard();
};

document.addEventListener('DOMContentLoaded', generateBoxes());
