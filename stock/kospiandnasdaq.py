import pandas as pd
import FinanceDataReader as fdr

def kospiandnasdaq ():
    # 나스닥
    IXIC = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31',data_source='close')

    IXIC.dropna(axis=0)

    # 코스피
    ks11 = fdr.DataReader('ks11', '2016-01-04', '2021-12-31',data_source='close')

    ks11.dropna(axis=0)

    stock_list = [
      ["NASDAQ", "IXIC"],
      ["KOSPI", "ks11"],
    ]

    df_list = [fdr.DataReader(code, '2016-01-04', '2021-12-31')['Close'] for name, code in stock_list]

    df = pd.concat(df_list, axis=1)
    df.columns = [name for name, code in stock_list]

    df.index = df.index.strftime('%Y/%m/%d')
    df = df.fillna(method = 'ffill')

    return df
