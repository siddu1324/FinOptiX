from faker import Faker
import csv
import random

fake = Faker()

# Define how many records you want
num_records = 1000

# Define the field names for your CSV file
fieldnames = ['Company', 'Month', 'Revenue', 'Expenses', 'Profit']

# Function to generate a random financial figure
def generate_financial_figure(start=10000, end=100000):
    return round(random.uniform(start, end), 2)

def create_fake_data():
    company = fake.company()
    month = fake.date(pattern="%Y-%m", end_datetime='now')
    revenue = generate_financial_figure()
    expenses = generate_financial_figure(end=revenue)  # Ensure expenses are not greater than revenue
    profit = revenue - expenses
    return {
        'Company': company,
        'Month': month,
        'Revenue': revenue,
        'Expenses': expenses,
        'Profit': profit
    }
def write_data_to_csv(filename):
    with open(filename, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

        for _ in range(num_records):
            writer.writerow(create_fake_data())
if __name__ == "__main__":
    output_filename = 'fake_financial_data.csv'
    write_data_to_csv(output_filename)
