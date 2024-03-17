import nextConnect from 'next-connect';
import multer from 'multer';

// Set up where files will be uploaded. In a real deployment, you'd save to cloud storage or a database.
const upload = multer({ dest: './public/assets/' }); // Adjust the destination as needed

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Process a POST request with file data.
apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  // You can access the file using req.file and save it or process it as needed.
  // In production, you'd likely upload it to cloud storage here.
  console.log(req.file);
  res.status(200).json({ message: 'File uploaded successfully' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, multer will handle it
  },
};
