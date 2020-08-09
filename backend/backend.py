# request base: https://api.fakenewsdetector.org/votes_by_content?content=""
import time
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/fact-check", methods=["GET", "POST"])
def fact_check():
    return {'time': time.time()}

@app.route("/")
def root():
    return "API up and running."