from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("chicken.html")


if __name__ == "__main__":
    app.run()

 