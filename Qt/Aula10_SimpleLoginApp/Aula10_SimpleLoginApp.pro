#-------------------------------------------------
#
# Project created by QtCreator 2016-08-21T18:31:21
#
#-------------------------------------------------

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = Aula10_SimpleLoginApp
TEMPLATE = app


SOURCES += main.cpp\
        mainwindow.cpp \
    logindialog.cpp \
    person.cpp

HEADERS  += mainwindow.h \
    logindialog.h \
    person.h

FORMS    += mainwindow.ui \
    logindialog.ui
