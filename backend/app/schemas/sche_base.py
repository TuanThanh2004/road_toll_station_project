from typing import Optional, TypeVar, Generic
from pydantic.generics import GenericModel

from pydantic import BaseModel

T = TypeVar("T")


class ResponseSchemaBase(BaseModel):
    __abstract__ = True

    code: str = ''
    message: str = ''
    
    # Tạo phản hồi tùy chỉnh mới mã và tin nhắn cụ thể
    def custom_response(self, code: str, message: str):
        self.code = code
        self.message = message
        return self

    # Tạo phản hồi thành công
    def success_response(self):
        self.code = '000'
        self.message = 'Thành công'
        return self


class DataResponse(ResponseSchemaBase, GenericModel, Generic[T]):
    data: Optional[T] = None

    class Config:
        arbitrary_types_allowed = True

    # Tạo phản hồi tùy chỉnh với dữ liệu
    def custom_response(self, code: str, message: str, data: T):
        self.code = code
        self.message = message
        self.data = data
        return self


    # Tạo phản hồi thành công với dữ liệu
    def success_response(self, data: T):
        self.code = '000'
        self.message = 'Thành công'
        self.data = data
        return self



"""
    current_page: thể hiện số trang hiện tại trong phản hồi được phân trang nếu có (nếu có)
    page_size: biểu thị sô mục trên mỗi trang trong phản hồi phân trang (nếu có)
    total_items: tổng số mục trong tập dữ liệu (nếu có)
"""
class MetadataSchema(BaseModel):
    current_page: int 
    page_size: int
    total_items: int