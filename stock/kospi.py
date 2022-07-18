import pandas as pd
import FinanceDataReader as fdr

# 코스피 코드 더 긁어와야 함
def kospi ():

    # 코스피
    kospi = fdr.DataReader('ks11', '2016-01-04', '2021-12-31',data_source='close')
    

    kospi.dropna(axis=0)

    kospi.index = kospi.index.strftime('%Y/%m/%d')
    kospi = kospi.fillna(method = 'ffill')

    return kospi
