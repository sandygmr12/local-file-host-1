const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(express.json());

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/landing.html');
});

// Serve the main page when users click "Get Started"
app.get('/public/index.html', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    const { file, body } = req;
    const { description } = body;

    if (file) {
        const response = {
            success: true,
            filename: file.originalname,
            description: description
        };
        res.json(response);
    } else {
        res.json({ success: false });
    }
});

app.get('/files', (req, res) => {
    const files = [];

    fs.readdirSync('./public/uploads').forEach(file => {
        const filePath = path.join('./public/uploads', file);
        const fileStats = fs.statSync(filePath);

        files.push({
            filename: file,
            description: req.body.description || '',
            size: fileStats.size
        });
    });

    res.json(files);
});

app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public/uploads', filename);

    res.download(filePath, filename);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
