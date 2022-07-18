from flask import Flask
import seaborn as sns
import FinanceDataReader as fdr
import kospiandnasdaq as kn
import nasdaq as na

app = Flask(__name__)


# Members API Route
@app.route("/user")
def members():
    return {"users": ["users1", " users2", "users3"]}


@app.route('/dashboard')
def main():
    return {"dashboard": ["dashboard.html","start.html"]}


@app.route('/kospiandnasdaq')
def category():
    df = kn.kospiandnasdaq().to_dict()

    return (df)


@app.route('/stocks_kospi')
def kospi_nasdaq():


    return


@app.route('/stocks_nasdaq')
def stocks_nasdaq():
    nasdaq = na.nasdaq().to_dict()
    nasdaq_month = na.nasdaq_month().to_dict()
    nasdaq_day = na.nasdaq_day().to_dict()

    return {"nasdaq" : nasdaq, "nasdaq_month" : nasdaq_month, "nasdaq_day" : nasdaq_day}


@app.route('/coupling')
def coupling():
    return {"coupling": ["coupling.html"]}


if __name__ == "__main__":
    app.run(debug=True)
