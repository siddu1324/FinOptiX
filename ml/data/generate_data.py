import pandas as pd
import numpy as np

def create_financial_data(num_days):
    np.random.seed(42)  # For reproducibility
    
    # Generate daily data
    dates = pd.date_range(start="2020-01-01", periods=num_days, freq='D')
    revenue = np.random.normal(loc=100000, scale=15000, size=num_days)

    # Expenses as fractions of revenue
    cogs = revenue * np.random.uniform(0.4, 0.6, num_days)
    payroll = revenue * np.random.uniform(0.1, 0.15, num_days)
    marketing = revenue * np.random.uniform(0.05, 0.1, num_days)
    rd = revenue * np.random.uniform(0.05, 0.08, num_days)
    consulting = revenue * np.random.uniform(0.02, 0.04, num_days)
    travel = revenue * np.random.uniform(0.01, 0.02, num_days)
    
    # Profit calculation
    total_expenses = cogs + payroll + marketing + rd + consulting + travel
    profit = revenue - total_expenses

    # Creating a DataFrame
    df = pd.DataFrame({
        'Date': dates,
        'Revenue': revenue,
        'COGS': cogs,
        'Payroll': payroll,
        'Marketing': marketing,
        'R&D': rd,
        'Consulting': consulting,
        'Travel': travel,
        'Profit': profit
    })

    return df

# Generate the dataset
num_days = 365 * 10  # 10 years of daily data
df = create_financial_data(num_days)

# Optionally, save to CSV
df.to_csv('daily_financial_data.csv', index=False)

print(df.head())
