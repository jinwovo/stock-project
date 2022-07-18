import pandas as pd
import FinanceDataReader as fdr

def kospiandnasdaq ():
    # 코스피
    ks11 = fdr.DataReader('KS11', '2016-01-04', '2021-12-31',data_source='close')

    # 나스닥
    IXIC = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31', data_source='close')



    # 나스닥 결측치 제거
    IXIC = fdr.DataReader('IXIC', '2016-01-04', '2021-12-31', data_source='close')
    IXIC.dropna(axis=0)
    IXIC.to_csv("ixic.csv")

    # 코스피 결측치제거
    ks11 = fdr.DataReader('ks11', '2016-01-04', '2021-12-31', data_source='close')
    ks11.dropna(axis=0)
    ks11.to_csv("ks11.csv")


    stock_list = [
      ["NASDAQ", "IXIC"],
      ["KOSPI", "ks11"],
    ]

    df_list = [fdr.DataReader(code, '2016-01-04', '2021-12-31')['Close'] for name, code in stock_list]

    df = pd.concat(df_list, axis=1)
    df.columns = [name for name, code in stock_list]
    # datatime -> sting
    # df.index = df.index.strftime('%Y/%m/%d')
    print(df)


    return df
