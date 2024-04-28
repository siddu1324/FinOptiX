from flask import Flask, request, jsonify, render_template
import pandas as pd
import joblib
import os

app = Flask(__name__)
model = joblib.load('ml/notebooks/forest_model.pkl')  # Make sure this is the correct path to your model

ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/process-data', methods=['POST'])
def process_data():
    data = request.get_json()
    df = pd.DataFrame(data)
    df_prepared = df.drop(columns=['Profit'], errors='ignore')
    predictions = model.predict(df_prepared)
    df['Predicted_Profit'] = predictions
    headers = df.columns.tolist()
    data = df.values.tolist()
    print(data)
    #return render_template('data.html', headers=headers, data=data)

@app.route('/')
def index():
    return "Welcome to FinOptiX API!"

if __name__ == '__main__':
    app.run(port=5001, debug=True)
