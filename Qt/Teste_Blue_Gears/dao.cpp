#include "dao.h"

DAO::DAO(QString databaseName, QString connectionName)
{
    this->connectionName = connectionName;
    if(!(QSqlDatabase::database(connectionName).isOpen())){
        QSqlDatabase database = QSqlDatabase::addDatabase("QSQLITE", this->connectionName);
        database.setDatabaseName(databaseName);
        database.open();
    } else {
        qDebug() << "hey, I am opened";
    }
}

DAO::~DAO()
{
    //essa linha é usada na mainwindow pois a conexão só será fechada ao fim do programa
    //já que o banco será utilizado em mais de uma janela
    //closeDatabase();
}

void DAO::closeDatabase()
{
    QSqlDatabase database = QSqlDatabase::database(this->connectionName, false);
    if(database.isOpen()){
        database.close();
    }
    QSqlDatabase::removeDatabase(this->connectionName);
}
