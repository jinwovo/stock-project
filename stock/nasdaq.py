import pandas as pd
import FinanceDataReader as fdr

def nasdaq():
    # 나스닥
    nasdaq = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31', data_source='close')
    nasdaq.dropna(axis=0)
    nasdaq = nasdaq.fillna(method='ffill')
    nasdaq = nasdaq.drop(['Low', 'High', 'Open'], axis=1)
    nasdaq.index = nasdaq.index.strftime('%Y/%m/%d')

    return nasdaq

def nasdaq_month():
    nasdaq = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31', data_source='close')
    nasdaq.dropna(axis=0)
    nasdaq = nasdaq.fillna(method='ffill')
    nasdaq = nasdaq.drop(['Low', 'High', 'Open'], axis=1)
    nasdaq.index = nasdaq.index.strftime('%Y/%m/%d')
    # 월별
    nasdaq['Date'] = nasdaq.index
    nasdaq['Date'] = pd.to_datetime(nasdaq['Date'])
    nasdaq['YearMonth'] = nasdaq['Date'].dt.to_period('M')
    nasdaq_month = nasdaq.groupby('YearMonth').mean().reset_index()
    nasdaq_month['YearMonth'] = nasdaq_month['YearMonth'].astype(str)

    return nasdaq_month

def nasdaq_day():
    nasdaq = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31', data_source='close')
    nasdaq.dropna(axis=0)
    nasdaq = nasdaq.fillna(method='ffill')
    nasdaq = nasdaq.drop(['Low', 'High', 'Open'], axis=1)
    nasdaq.index = nasdaq.index.strftime('%Y/%m/%d')
    # 일별
    nasdaq['Date'] = nasdaq.index
    nasdaq['Date'] = pd.to_datetime(nasdaq['Date'])
    nasdaq['YearMonth'] = nasdaq['Date'].dt.to_period('d')
    nasdaq_day = nasdaq.groupby('YearMonth').mean().reset_index()
    nasdaq_day['YearMonth'] = nasdaq_day['YearMonth'].astype(str)

    return nasdaq_day