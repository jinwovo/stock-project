from flask import Flask
import seaborn as sns
import FinanceDataReader as fdr
import kospiandnasdaq as kn

app = Flask(__name__)


# Members API Route
@app.route("/user")
def members():
    return {"users": ["users1", " users2", "users3"]}


@app.route('/dashboard')
def main():
    return {"dashboard": ["dashboard.html","start.html1"]}


@app.route('/kospiandnasdaq')
def category():
    df = kn.kospiandnasdaq().to_dict()

    # tips = sns.load_dataset("tips").head(10).T
    # tips = tips.to_dict()

    return {"df" : df}


@app.route('/kospi_nasdaq')
def kospi_nasdaq():
    return {"kospi_nasdaq": ["kospi_nasdaq.html"]}


@app.route('/stocks_nasdaq ')
def stocks_nasdaq():
    return {"stocks_nasdaq": ["stocks_nasdaq.html"]}


@app.route('/coupling')
def coupling():
    return {"coupling": ["coupling.html"]}


if __name__ == "__main__":
    app.run(debug=True)
