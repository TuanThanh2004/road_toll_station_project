import enum

"""
ADMIN: quản trị viên
GUEST: khách
"""
class UserRole(enum.Enum):
    ADMIN = 'admin'
    GUEST = 'guest'