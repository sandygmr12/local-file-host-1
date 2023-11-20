document.addEventListener('DOMContentLoaded', () => {
  loadFiles();
});

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileDescription = document.getElementById('fileDescription').value;

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('description', fileDescription);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const uploadMessageContainer = document.getElementById('uploadMessage');
        
        if (data.success) {
            uploadMessageContainer.innerHTML = '<p class="success">File uploaded successfully!</p>';
            loadFiles();
        } else {
            uploadMessageContainer.innerHTML = '<p class="error">Error uploading file. Please try again.</p>';
        }
    })
    .catch(error => console.error('Error:', error));
}

function loadFiles() {
    fetch('/files')
    .then(response => response.json())
    .then(files => {
        const fileList = document.getElementById('fileList');
        fileList.innerHTML = '';

        files.forEach(file => {
            const listItem = document.createElement('li');
            const fileName = file.description ? `${file.filename} (${file.description})` : file.filename;

            listItem.innerHTML = `
            <div>
            <p>${fileName}</p>
            <div class="button-container">
                <a href="/download/${file.filename}" download>
                    <button class="button">
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Download Now</span>
                        </span>
                    </button>
                </a>
            </div>
        </div>
        <div>${formatFileSize(file.size)}</div>
            `;
            fileList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
}


function formatFileSize(size) {
  const kbSize = size / 1024;
  if (kbSize < 1024) {
      return kbSize.toFixed(2) + ' KB';
  } else {
      return (kbSize / 1024).toFixed(2) + ' MB';
  }
}
function refreshPage() {
    location.reload();
}