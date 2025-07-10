
function generateThumbnail() {
  const videoId = document.getElementById('videoId').value.trim();
  const resolution = document.getElementById('resolution').value;
  if (!videoId) return alert('Please enter a YouTube Video ID');
  const imageUrl = `https://img.youtube.com/vi/${videoId}/${resolution}.jpg`;
  document.getElementById('thumbnailPreview').innerHTML = `
    <img src="${imageUrl}" alt="Thumbnail"/>
    <a href="${imageUrl}" download="thumbnail.jpg">
      <button style="margin-top:10px;">Download</button>
    </a>
  `;
}

function generateTags() {
  const topic = document.getElementById('tagInput').value.trim();
  if (!topic) return alert('Enter video topic');
  const words = topic.split(' ').filter(Boolean);
  const tags = words.map(w => w.toLowerCase()).join(', ');
  document.getElementById('tagOutput').value = tags;
}

function generateHashtags() {
  const topic = document.getElementById('hashtagInput').value.trim();
  if (!topic) return alert('Enter video topic');
  const words = topic.split(' ').filter(Boolean);
  const hashtags = words.map(w => '#' + w.toLowerCase()).join(' ');
  document.getElementById('hashtagOutput').value = hashtags;
}

function copyToClipboard(id) {
  const text = document.getElementById(id);
  text.select();
  document.execCommand('copy');
  alert('Copied to clipboard!');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
