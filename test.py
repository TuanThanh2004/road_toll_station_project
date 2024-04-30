from sqlalchemy import create_engine, orm, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database URL
SQLALCHEMY_DATABASE_URL = "sqlite:///sql_app_tuanthanh20004.db"

# Create an engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create declarative base
Base = declarative_base()

# Define User model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    email = Column(String(255))

# Create tables (if not exists)
Base.metadata.create_all(engine)

# Create a session maker
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def add_user(name: str, email: str):
    """Add a new user to the database."""
    with SessionLocal() as session:
        user = User(name=name, email=email)
        session.add(user)
        session.commit()


def get_all_users():
    """Retrieve all users from the database."""
    with SessionLocal() as session:
        users = session.query(User).all()
        return users


def update_user(user_id: int, new_email: str):
    """Update the email of a user."""
    with SessionLocal() as session:
        user = session.query(User).filter(User.id == user_id).first()
        if user:
            user.email = new_email
            session.commit()
            return True
        else:
            return False


def delete_user(user_id: int):
    """Delete a user from the database."""
    with SessionLocal() as session:
        user = session.query(User).filter(User.id == user_id).first()
        if user:
            session.delete(user)
            session.commit()
            return True
        else:
            return False


# Example usage
# add_user("John Doe", "johndoe@example.com")
add_user("JandgdgdsadascSe Doe", "janedoe@example.com")

users = get_all_users()
for user in users:
    print(f"User: {user.id}, Name: {user.name}, Email: {user.email}")

update_user(1, "newemail@example.com")

# delete_user(2)

users = get_all_users()
print("Remaining users:")
for user in users:
    print(f"User: {user.id}, Name: {user.name}, Email: {user.email}")
