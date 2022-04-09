# Custom endpoint
endpoint = '/api/v1'


@app.route(endpoint + '/*********', methods=['GET', 'PUT', 'DELETE'])
