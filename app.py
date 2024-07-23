from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

#cria uma rota para requisição do tipo get na qual devolvera uma lista de vinte e um usuários
@app.route('/api/owners')
def get_owners():
    response = requests.get('https://randomuser.me/api/?results=21')
    data = response.json()
    owners = [
        {
            "name": f"{person['name']['first']} {person['name']['last']}",
            "email": person['email'],
            "img": person['picture']['thumbnail']
        }
        for person in data['results']
    ]
    return jsonify(owners)

if __name__ == '__main__':
    app.run(debug=True)