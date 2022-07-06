from flask import Blueprint, render_template
from werkzeug.utils import redirect

bp = Blueprint('main', __name__, url_prefix='/')


# 여기서 이제 url관리를 하게 된다.
# 'main' 은 여기 views파일의 bp객체를 가리키는 별칭(url_for 메서드에서 활용된다.)
#  중간의 __name__에는 main_views라는 모듈의 이름이 들어가게 된다.

@bp.route('/')
def index():
    return render_template('index.html')


@bp.route('/category')
def category():
    return render_template('category.html')



# 위의 bp.route 어노테이션에 입력한 url을 a태그 href속성에 넣어주기만 하면 해당 라우팅 함수 호출 가능.
# 또한 여기에서는 이미 만들어진 페이지로 전환한다는 느낌으로 접근하기보단, 특정 url이 입력되면 미리 render_template로 지정해두 html
# 파일을 렌더링해 띄워준다는 느낌으로 접근하는게 이해하기 쉬움. 그래서 redirect가 아니라 render_template을 따로 쓰는거임
# redirect는 다른 라우팅함수로 바로 연결해준다고 생각하자.