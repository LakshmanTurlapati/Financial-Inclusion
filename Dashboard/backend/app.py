from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

df1 = pd.read_excel('user_details_5K.xlsx')
df2 = pd.read_excel('user_details_20K.xlsx')
df3 = pd.read_excel('user_details_75K.xlsx')

df = pd.concat([df1, df2, df3])
df.reset_index(inplace=True)
org_df = df.copy()

credit_score = df[['CreditScore']]
other_features = df.drop(['CreditScore', 'Aadhar', 'Pan', 'index'], axis=1)

X_train, X_test, y_train, y_test = train_test_split(other_features, credit_score, test_size=0.1, random_state=7)

model = DecisionTreeRegressor()
model.fit(X_train, y_train)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"income": 10000, "expenses": 6000, "avg_balance": 5000, "credit_score": 670}
    return jsonify(data)

@app.route("/api/creditscore/<int:aadhar>", methods=["GET"])
def get_credit(aadhar):
    i = 0
    for d in org_df["Aadhar"]:
        if d == aadhar:
            break
        i += 1
    ndf = pd.DataFrame([{'AverageMonthlyIncome': df["AverageMonthlyIncome"][i], 'AverageMonthlyBalance': df['AverageMonthlyBalance'][i], 'AverageMonthlyExpenditure': df['AverageMonthlyExpenditure'][i]}])
    result = model.predict(ndf)
    print(result)
    data = {
        "credit_score": result[0],
        "aadhar": aadhar,
        'AverageMonthlyIncome': int(df["AverageMonthlyIncome"][i]),
        'AverageMonthlyBalance': int(df['AverageMonthlyBalance'][i]),
        'AverageMonthlyExpenditure': int(df['AverageMonthlyExpenditure'][i]),
        'Pan': str(df['Pan'][i])
    }
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def post_data():
    json_data = request.get_json()
    return jsonify({"received": json_data}), 201

if __name__ == '__main__':
    app.run(debug=True)
