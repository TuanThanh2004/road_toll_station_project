from typing import Optional

from sqlalchemy import select, func
from sqlalchemy.orm import Session

from database import engine
from models import Driver, LicensePlate, TransactionHistory, RoadTollPlaza
from schemas import Driver, LicensePlate, TransactionHistory, RoadTollPlaza


class CRUD:
    def __init__(self, session: Session = None):
        self.session = session or Session(engine)  # Create session if not provided

    # CRUD operations for Driver model

    def get_driver(self, cid: int) -> Optional[Driver]:
        result = self.session.query(Driver).filter(Driver.cid == cid).first()
        return result

    def create_driver(self, driver: Driver) -> Driver:
        self.session.add(driver)
        self.session.commit()
        self.session.refresh(driver)  # Refresh to get generated ID
        return driver

    def update_driver(self, cid: int, driver_data: Driver) -> Optional[Driver]:
        driver = self.get_driver(cid)
        if not driver:
            return None
        for field, value in driver_data.dict(exclude_unset=True).items():
            setattr(driver, field, value)
        self.session.commit()
        return driver

    def delete_driver(self, cid: int) -> bool:
        driver = self.get_driver(cid)
        if not driver:
            return False
        self.session.delete(driver)
        self.session.commit()
        return True

    # CRUD operations for LicensePlate model (similar structure)

    def get_license_plate(self, license_plate: str) -> Optional[LicensePlate]:
        result = self.session.query(LicensePlate).filter(LicensePlate.license_plate == license_plate).first()
        return result

    def create_license_plate(self, license_plate: LicensePlate) -> LicensePlate:
        self.session.add(license_plate)
        self.session.commit()
        self.session.refresh(license_plate)  # Refresh to get generated ID
        return license_plate

    def update_license_plate(self, license_plate: str, license_plate_data: LicensePlate) -> Optional[LicensePlate]:
        existing_plate = self.get_license_plate(license_plate)
        if not existing_plate:
            return None
        for field, value in license_plate_data.dict(exclude_unset=True).items():
            setattr(existing_plate, field, value)
        self.session.commit()
        return existing_plate

    def delete_license_plate(self, license_plate: str) -> bool:
        existing_plate = self.get_license_plate(license_plate)
        if not existing_plate:
            return False
        self.session.delete(existing_plate)
        self.session.commit()
        return True

    # CRUD operations for TransactionHistory model (similar structure)

    def get_transaction_history(self, th_id: int) -> Optional[TransactionHistory]:
        result = self.session.query(TransactionHistory).filter(TransactionHistory.th_id == th_id).first()
        return result

    def create_transaction_history(self, transaction_history: TransactionHistory) -> TransactionHistory:
        self.session.add(transaction_history)
        self.session.commit()
        self.session.refresh(transaction_history)  # Refresh to get generated ID
        return transaction_history

    def update_transaction_history(self, th_id: int, transaction_history_data: TransactionHistory) -> Optional[TransactionHistory]:
        existing_transaction = self.get_transaction_history(th_id)
        if not existing_transaction:
            return None
        for field, value in transaction_history_data.dict(exclude_unset=True).items():
            setattr(existing_transaction, field, value)
        self.session.commit()
        return existing_transaction

    def delete_transaction_history(self, th_id: int) -> bool:
        existing_transaction = self.get_transaction_history(th_id)
        if not existing_transaction:
            return False
        self.session.delete(existing_transaction)
        self.session.commit()
        return True

    # CRUD operations for RoadTollPlaza model

    def get_road_toll_plaza(self, station_id: int) -> Optional[RoadTollPlaza]:
        result = self.session.query(RoadTollPlaza).filter(RoadTollPlaza.station_id == station_id).first()
        return result

    def create_road_toll_plaza(self, road_toll_plaza: RoadTollPlaza) -> RoadTollPlaza:
        self.session.add(road_toll_plaza)
        self.session.commit()
        self.session.refresh(road_toll_plaza)  # Refresh to get generated ID
        return road_toll_plaza

    def update_road_toll_plaza(self, station_id: int, road_toll_plaza_data: RoadTollPlaza) -> Optional[RoadTollPlaza]:
        existing_plaza = self.get_road_toll_plaza(station_id)
        if not existing_plaza:
            return None
        for field, value in road_toll_plaza_data.dict(exclude_unset=True).items():
            setattr(existing_plaza, field, value)
        self.session.commit()
        return existing_plaza

    def delete_road_toll_plaza(self, station_id: int) -> bool:
        existing_plaza = self.get_road_toll_plaza(station_id)
        if not existing_plaza:
            return False
        self.session.delete(existing_plaza)
        self.session.commit()
        return True
