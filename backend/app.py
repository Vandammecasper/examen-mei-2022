from flask_socketio import SocketIO, emit, send
from repositories.DataRepository import DataRepository
from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime, date

# Start app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'Secret!aBcdXyZ'
# Stel CORS in op Routes en Socket
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

# Custom endpoint
endpoint = '/api/v1'


@app.route(endpoint + '/*********', methods=['GET', 'PUT', 'DELETE', 'POST'])
def get_SOMETHING():
    if request.method == 'GET':
        return jsonify(SOMETHING=DataRepository.read_SOMETHING()), 200
    elif request.method == 'POST':
        # toevoegen van ID
        gegevens = DataRepository.json_or_formdata(request)
        nieuw_id = DataRepository.create_SOMETHING(
            gegevens[''], gegevens[''], gegevens[''], gegevens[''], gegevens[''])
        print(data)
        return jsonify(treinid=nieuw_id), 201
    elif request.method == 'DELETE':
        data = DataRepository.delete_SOMETHING()
        if data > 0:
            return jsonify(status="success", row_count=data), 201
        else:
            return jsonify(status="no update", row_count=data), 201


# SOCKET.IO EVENTS
@socketio.on('connect')  # (4)
def initial_connection():
    print('A new client connect')
    #emit('B2F_connected', {'currentProgress': 0})
    data = DataRepository.read_total_progress(date.today())
    if data['amount']:
        previous_progress = data['amount']
    else:
        previous_progress = 0
    # Send ONLY to the client that just connected!!
    emit('B2F_connected', {'currentProgress': previous_progress})


# START THE APP
if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0')
