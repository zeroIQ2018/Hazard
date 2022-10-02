from flask import Flask, redirect, url_for, render_template 
import sys

import logging

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)