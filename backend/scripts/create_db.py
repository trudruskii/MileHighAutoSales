from backend.app import app, db
from backend.models import CarListing, AdminAccount

with app.app_context():
    db.create_all()

print("Database tables created successfully.")