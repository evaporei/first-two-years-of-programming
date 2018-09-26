#-------------------------------------------------
#
# Project created by QtCreator 2016-08-22T15:51:16
#
#-------------------------------------------------

QT       += core gui sql network widgets

#greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = Teste_Blue_Gears
TEMPLATE = app


SOURCES += main.cpp\
    mainwindow.cpp \
    filedownloader.cpp \
    adddialog.cpp \
    dao.cpp \
    itemdao.cpp \
    item.cpp

HEADERS  += \
    mainwindow.h \
    filedownloader.h \
    adddialog.h \
    dao.h \
    itemdao.h \
    item.h

FORMS    += \
    mainwindow.ui \
    adddialog.ui

DISTFILES += \
    banco_de_dados/database.db

RESOURCES +=
