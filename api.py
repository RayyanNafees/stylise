
import string
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)


def style(s: str):
    alpha = string.ascii_letters
    eng = alpha[26:]+alpha[:26]
    styl = ''.join(chr(i) for i in range(120016, 120016+26+26))
    def switch(c): return styl[eng.index(c)]
    return ''.join(switch(i) if i in eng else i for i in s)


@app.route('/')
@cross_origin()
def empty(): return 'Type Something!'


@app.route('/<s>')
@cross_origin()
def convert(s='Maryam Zubairy'): return style(s)
