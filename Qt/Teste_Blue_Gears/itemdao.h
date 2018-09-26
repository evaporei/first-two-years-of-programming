#ifndef ITEMDAO_H
#define ITEMDAO_H

#include "dao.h"
#include "item.h"
#include <QObject>
#include <QSqlTableModel>


class ItemDAO : public DAO
{
public:
    ItemDAO(QString databaseName);
    void inserir(Item item);
    void remover(Item item);
    void atualizar(Item item);
    QSqlTableModel * listar(QObject * parent);
    void deletaLista(QSqlTableModel * model);

};

#endif // ITEMDAO_H
