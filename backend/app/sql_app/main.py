from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine
from models import Driver, LicensePlate, TransactionHistory, RoadTollPlaza
from datetime import datetime

def main():
    # Create a session
    db = SessionLocal()

    # Create a driver
    driver = Driver(name="John Doe", money=100, password="secure_password")
    db.add(driver)
    # Create a license plate associated with the driver
    license_plate = LicensePlate(license_plate="ABC123", cid=driver.cid, vehicle_parameters="Car")

    # Add the driver and license plate to the session
    
    db.add(license_plate)

    # Simulate a transaction
    transaction_history = TransactionHistory(
        license_plate_id=license_plate.license_plate,
        station_id=1,  # Replace with actual station ID
        time=datetime.time,  # Use actual datetime
        money=50,  # Transaction amount
    )
    db.add(transaction_history)

    # Commit the changes to the database
    db.commit()

    # Close the session
    db.close()

if __name__ == "__main__":
    main()


