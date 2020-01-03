#import mysql.connector
#conn = mysql.connector.connect(host='127.0.0.1', user='root', passwd='jsnaLl23j1999MySQL', database='mydb')
#cursor = conn.cursor()
from flask import Flask
from flask import render_template
app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    title = 'Home'
    content = 'Welcome to our website'
    return render_template('Finalproject.html', mytitle=title, mycontent=content)
    

@app.route('/query')
def query():
    title = 'Query'
    content = 'barre recherche mirna'
    return render_template('Finalproject.html',mytitle=title, mycontent=content)
    

@app.route('/about')
def about():
    title = 'About'
    content = 'description projet'
    return render_template('Finalproject.html', mytittle=title, mycontent=content)


if __name__ == "__main__":
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    app.run(host="127.0.0.1", port=8080, debug=True)