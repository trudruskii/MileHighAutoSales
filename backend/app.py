from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from models import CarListing
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)


@app.route('/api/listings', methods=['GET'])
def get_listings():
    # Fetch all car listings from the database
    listings = CarListing.query.all()
    # Convert them to dictionaries
    listings_data = [
        {
            "id": listing.id,
            "make": listing.make,
            "model": listing.model,
            "year": listing.year,
            "description": listing.description,
            "price": listing.price
        }
        for listing in listings
    ]
    return jsonify(listings_data)

if __name__ == '__main__':
    app.run(debug=True)