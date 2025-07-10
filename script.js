
function downloadThumbnail() {
    const videoId = document.getElementById('videoId').value.trim();
    if (!videoId) return alert('Please enter a video ID.');
    document.getElementById('loading').style.display = 'block';
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    setTimeout(() => {
        document.getElementById('thumbnail').innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail" style="max-width:100%;"/>`;
        document.getElementById('loading').style.display = 'none';
    }, 500);
}

function generateTags() {
    const text = document.getElementById('videoId').value.trim();
    const tags = text ? text.split(" ").map(word => word + "_tag").join(", ") : "No tags generated";
    document.getElementById('tags').innerText = tags;
}

function copyToClipboard() {
    const tags = document.getElementById('tags').innerText;
    navigator.clipboard.writeText(tags).then(() => {
        const popup = document.getElementById('copiedPopup');
        popup.style.display = 'block';
        setTimeout(() => popup.style.display = 'none', 1000);
    });
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}
