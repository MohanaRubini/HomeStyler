import React, { useState } from 'react';

function Upload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [recommendation, setRecommendation] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const getRecommendation = () => {
    if (!image) return;

    const filename = image.name.toLowerCase();

    if (filename.includes('dark')) {
      setRecommendation(
        "This room looks dark. We suggest using bright paint like cream or soft yellow."
      );
    } else if (filename.includes('bedroom')) {
      setRecommendation(
        "Since it’s a bedroom, calming colors like lavender or sage green would be ideal."
      );
    } else {
      setRecommendation(
        "Try neutral tones with accent walls for a modern look."
      );
    }
  };

  return (
    <section className="page" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📷 Upload Your Room Photo</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ marginTop: '10px' }}
      />

      {preview && (
        <>
          <div style={{ marginTop: '20px' }}>
            <h4>Preview:</h4>
            <img
              src={preview}
              alt="Room Preview"
              style={{
                maxWidth: '90%',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          <button
            onClick={getRecommendation}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            🎨 Get Recommendation
          </button>
        </>
      )}

      {recommendation && (
        <div
          style={{
            marginTop: '20px',
            background: '#ffefd5',
            color: '#222',
            padding: '16px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxWidth: '90%',
            fontSize: '16px'
          }}
        >
          💡 <strong>AI Recommendation:</strong> {recommendation}
        </div>
      )}
    </section>
  );
}

export default Upload;
