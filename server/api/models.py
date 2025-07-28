from django.db import models

class User(Base):
    id: Mapped[int_pk]
    email: Mapped[str_uniq]
    password: Mapped[str]
    role: Mapped[str] = mapped_column(server_default=text('USER'))


class Basket(Base):
    id: Mapped[int_pk]
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"), nullable=False)

    # user: Mapped["User"] = relationship("User", back_populates="baskets")
    # device: Mapped["Device"] = relationship("Device", back_populates="baskets")


class Device(Base):
    id: Mapped[int_pk]
    name: Mapped[str_uniq]
    price: Mapped[int]
    rating: Mapped[int] = mapped_column(nullable=True)
    img: Mapped[str]

    deviceinfo: Mapped["DeviceInfo"] = relationship("DeviceInfo", back_populates="device")


class DeviceInfo(Base):
    id: Mapped[int_pk]
    title: Mapped[str_null_true]
    description: Mapped[str_null_true]
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"), nullable=False)

    device: Mapped["Device"] = relationship("Device", back_populates="deviceinfo")


class Type(Base):
    id: Mapped[int_pk]
    name: Mapped[str_uniq]
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"), nullable=False)

    # device: Mapped["Device"] = relationship("Device", back_populates="types")


class Brand(Base):
    id: Mapped[int_pk]
    name: Mapped[str_uniq]
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"), nullable=False)

   # device: Mapped["Device"] = relationship("Device", back_populates="brands")


class Rating(Base):
    id: Mapped[int_pk]
    rate: Mapped[int]
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), nullable=False)
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"), nullable=False)

    # device: Mapped["Device"] = relationship("Device", back_populates="ratings")


class TypeBrend(Base):
    id: Mapped[int_pk]
    type_id: Mapped[int] = mapped_column(ForeignKey("types.id"), nullable=False)
    device_id: Mapped[int] = mapped_column(ForeignKey("devices.id"), nullable=False)

    # device: Mapped["Device"] = relationship("Device", back_populates="typebrends")
    # type: Mapped["Type"] = relationship("Type", back_populates="typebrends")

