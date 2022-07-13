import pandas as pd
import FinanceDataReader as fdr

def kospiandnasdaq ():
    # 코스피
    ks11 = fdr.DataReader('KS11', '2016-01-04', '2021-12-31',data_source='close')

    # 나스닥
    IXIC = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31', data_source='close')

    stock_list = [
      ["NASDAQ", "IXIC"],
      ["KOSPI", "ks11"],
    ]

    df_list = [fdr.DataReader(code, '2016-01-04', '2021-12-31')['Close'] for name, code in stock_list]

    df = pd.concat(df_list, axis=1)
    df.columns = [name for name, code in stock_list]
    # datatime -> sting
    df.index = df.index.strftime('%Y/%m/%d')

    return df
