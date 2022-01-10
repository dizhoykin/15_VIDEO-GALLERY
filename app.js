import {sampleAPIResponse} from './sampleData.js';

const videoSample = document.querySelector('#video-sample').content;
const videoItem = videoSample.querySelector('.video-item');

const feature = document.querySelector('.feature');
const embed = feature.querySelector('.embed iframe');
const header = feature.querySelector('h1');
const description = feature.querySelector('p');

const gallery = document.querySelector('.gallery');

for (let i = 0; i < sampleAPIResponse.items.length; i++) {
  const videoItemNode = videoItem.cloneNode(true);

  const videoContainer = videoItemNode.querySelector('.video');
  videoContainer.alt = 'https://www.youtube.com/embed/' + sampleAPIResponse.items[i].id.videoId;

  const thumbnail = videoContainer.querySelector('img');
  thumbnail.src = sampleAPIResponse.items[i].snippet.thumbnails.default.url;

  const title = videoContainer.querySelector('h3');
  title.textContent = sampleAPIResponse.items[i].snippet.title;

  const itemDescription = document.createElement('p');
  itemDescription.textContent = sampleAPIResponse.items[i].snippet.description;
  itemDescription.hidden = true;
  videoContainer.appendChild(itemDescription);

  gallery.appendChild(videoItemNode);
}

embed.src = 'https://www.youtube.com/embed/' + sampleAPIResponse.items[0].id.videoId;
header.textContent = sampleAPIResponse.items[0].snippet.title;
description.textContent = sampleAPIResponse.items[0].snippet.description;

const links = gallery.querySelectorAll('.video');

links.forEach(link => {
  link.addEventListener('click', () => {
    embed.src = link.alt;
    header.textContent = link.querySelector('h3').textContent;
    description.textContent = link.querySelector('p').textContent;
  });
});
