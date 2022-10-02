from flask import Flask, redirect, url_for, render_template 
import sys
import os
import logging

template_dir = os.path.abspath('../Soulify/App/templates/')
static_dir = os.path.abspath('../Soulify/App/UI/static/')
app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

@app.route("/")
def home():
    return render_template("chicken.html")


if __name__ == "__main__":
    app.run()

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)