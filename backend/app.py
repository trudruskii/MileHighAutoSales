from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from models import CarListing
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Initialize the bcrypt instance
bcrypt = Bcrypt(app)

# Initialize the database
db = SQLAlchemy(app)

# Initialize the migration manager
migrate = Migrate(app, db)



# Create route for creating a new car listing
@app.route('/api/listings', methods=['POST'])
def create_listing():
    # Get the JSON data from the request body
    data = request.get_json()

    # Validate the data
    if not all([
        "title", "make", "model", "year", "price", "image_url"
    ] & data.keys()):
        return jsonify({"error": "Missing required fields"}), 400

    # Create a new CarListing object with the validated data
    listing = CarListing(
        title=data["title"],
        make=data["make"],
        model=data["model"],
        year=data["year"],
        price=data["price"],
        image_url=data["image_url"]
    )

    # Save the new CarListing to the database
    db.session.add(listing)
    db.session.commit()

    # Return the created CarListing as JSON
    return jsonify({"id": listing.id}), 201


# Create route for rest request for fetching car listings from the database
@app.route('/api/listings', methods=['GET'])
# Create function to fetch all car listings from the database and return them as JSON data.
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
    return jsonify(listings_data), 200



if __name__ == '__main__':
    app.run(debug=True)