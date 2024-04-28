from flask import Flask, request, jsonify
import pandas as pd
import joblib
import os

app = Flask(__name__)
model = joblib.load('ml/notebooks/forest_model.pkl')  # Make sure this is the correct path to your model

# You might need to define allowed file extensions and a function to check them
ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and allowed_file(file.filename):
        try:
            df = pd.read_csv(file)
            # Ensure that the model expects the exact columns from the CSV
            # Also, make sure you're dropping the right columns or preparing the data as your model expects
            df_prepared = df.drop(columns=['Profit'], errors='ignore')
            predictions = model.predict(df_prepared)
            df['Predicted_Profit'] = predictions
            # Depending on your needs, you could save the predictions to a CSV file, return them as JSON, etc.
            # For instance, to return as JSON:
            return jsonify(predictions=df['Predicted_Profit'].tolist())
        except Exception as e:
            # If anything goes wrong, we return an error message
            return jsonify({'error': str(e)}), 500

# This is only necessary if you want to allow GET requests to your root URL
@app.route('/')
def index():
    return "Welcome to FinOptiX API!"

if __name__ == '__main__':
    # Set the port to 5001 if that's what your server.js is set up for
    app.run(port=5001, debug=True)
