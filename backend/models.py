from app import db

class AdminAccount(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<AdminAccount {self.username}>'


class CarListing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    make = db.Column(db.String(80), nullable=False)
    model = db.Column(db.String(80), nullable=False)
    submodel = db.Column(db.String(90), nullable=True)
    year = db.Column(db.Integer, nullable=False)
    mileage = db.Column(db.Integer, nullable=True)
    vin = db.Column(db.Integer, nullable=True)
    color = db.Column(db.String(50), nullable=True)
    description = db.Column(db.String(200), nullable=True)
    features = db.Column(db.string(800), nullable=True)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<CarListing {self.title}{self.mileage}{self.price}>'

