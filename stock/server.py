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
    df = kn.kospiandnasdaq().head(10).to_dict()

    # tips = sns.load_dataset("tips").head(10).T
    # tips = tips.to_dict()

    return {"df" : df}


@app.route('/kospi_nasdaq')
def kospi_nasdaq():
    tips = sns.load_dataset("tips").head(10)
    total_bill = tips["total_bill"].to_dict()
    tip = tips["tip"].to_dict()
    tips = tips.to_dict()
    return {"tips": tips}


@app.route('/stocks_nasdaq')
def stocks_nasdaq():
    stock = fdr.StockListing('KOSPI')
    list = []

    for name in stock['Name']:
        list.append(name)

    return {"list": list}


@app.route('/coupling')
def coupling():
    return {"coupling": ["coupling.html"]}


if __name__ == "__main__":
    app.run(debug=True)
