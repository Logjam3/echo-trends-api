from flask import Flask, jsonify
from pytrends.request import TrendReq

app = Flask(__name__)
pytrends = TrendReq()

@app.route('/')
def home():
    return "Echo Trends API is running."

@app.route('/api/google-trends')
def get_trends():
    kw_list = ["emotional literacy", "bedtime routine", "calm parenting"]
    pytrends.build_payload(kw_list, timeframe='now 7-d', geo='US')
    data = pytrends.interest_over_time()
    top_keywords = [kw for kw in data.columns if kw != 'isPartial']
    return jsonify({"keywords": top_keywords})
