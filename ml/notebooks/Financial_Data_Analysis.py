#!/usr/bin/env python
# coding: utf-8

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.linear_model import LinearRegression
import numpy as np

def load_and_prepare_data(filepath):
    data = pd.read_csv(filepath)
    data.drop(['Date'], axis=1, inplace=True)  # Assuming 'Date' is not used in the model
    X = data.drop('Profit', axis=1)  # Features
    y = data['Profit']  # Target
    return X, y

def train_model(X_train, y_train):
    model = LinearRegression()
    model.fit(X_train, y_train)
    return model

def evaluate_model(model, X_test, y_test):
    predictions = model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)
    print(f"Mean Squared Error: {mse}")
    print(f"R^2 Score: {r2}")

def run_financial_modeling_workflow(filepath):
    X, y = load_and_prepare_data(filepath)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    model = train_model(X_train, y_train)
    evaluate_model(model, X_test, y_test)
    return model

# Adjust the file path to where your CSV file is stored
model = run_financial_modeling_workflow('../data/daily_financial_data.csv')


# Function to load and prepare data
def load_and_prepare_data(filepath):
    data = pd.read_csv(filepath)
    X = data.drop(['Date', 'Profit'], axis=1)  # Assuming 'Date' and 'Profit' are in the dataset
    y = data['Profit']
    return X, y

# Function for cross-validation
def cross_validate_model(model, X, y, cv=5):
    mse_scores = -cross_val_score(model, X, y, scoring='neg_mean_squared_error', cv=cv)
    r2_scores = cross_val_score(model, X, y, scoring='r2', cv=cv)
    print(f"Average Cross-Validated MSE: {np.mean(mse_scores)}")
    print(f"Average Cross-Validated R^2: {np.mean(r2_scores)}")

# Load and prepare data
X, y = load_and_prepare_data('../data/daily_financial_data.csv')

# Define the model
model = LinearRegression()

# Perform cross-validation
cross_validate_model(model, X, y)

from sklearn.ensemble import RandomForestRegressor

# Train a RandomForestRegressor to evaluate feature importance
forest_model = RandomForestRegressor(n_estimators=100, random_state=42)
forest_model.fit(X, y)

# Print feature importances
feature_importances = pd.Series(forest_model.feature_importances_, index=X.columns)
print("Feature Importances:")
print(feature_importances.sort_values(ascending=False))

def preprocess_data(filepath):
    # Load the data
    df = pd.read_csv(filepath)
    
    # Remove currency formatting and convert to float
    for col in df.columns[5:]:  # Assuming financial data starts at column 5
        df[col] = df[col].replace('[\$,)]', '', regex=True).replace('[(]', '-', regex=True).astype(float)
    
    # Reshape the data from wide to long format if necessary
    df = df.melt(id_vars=['Account', 'Businees Unit', 'Currency', 'Year', 'Scenario'], 
                 var_name='Month', value_name='Amount')
    
    # Convert 'Month' to a datetime type if necessary
    df['Date'] = pd.to_datetime(df['Year'].astype(str) + '-' + df['Month'], format='%Y-%b')

    return df

# Usage
df_processed = preprocess_data('../data/Financials Sample Data.csv')
print(df_processed.head())

import joblib
joblib.dump(forest_model, 'forest_model.pkl')

# Define a DataFrame with column names that your model expects
# Let's assume these values:
data = {
    'Revenue': [100000, 120000],    # Example revenue in dollars
    'COGS': [60000, 70000],         # Example cost of goods sold
    'Payroll': [20000, 25000],      # Example payroll expenses
    'Marketing': [5000, 6000],      # Marketing expenses
    'R&D': [8000, 9500],            # Research and Development expenses
    'Consulting': [3000, 3500],     # Consulting fees
    'Travel': [2000, 2500]          # Travel expenses
}

# Convert the dictionary to a DataFrame
input_data = pd.DataFrame(data)

# Load the model (assuming it's in the same directory and named correctly)
loaded_model = joblib.load('forest_model.pkl')

# Make predictions using the loaded model
predictions = loaded_model.predict(input_data)

# Print predictions
print(predictions)
