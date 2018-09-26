#ifndef DAO_H
#define DAO_H

#include <QtSql>
#include <QString>

//Data Access Object - Classe abstrata de acesso aos dados
class DAO
{
protected:
    QString connectionName;

public:
    DAO(QString databaseName, QString conectionName);
    ~DAO();
    void closeDatabase();
};

#endif // DAO_H
