#include "itemdao.h"
#include <QDateTime>
#include <QPixmap>
#include <QByteArray>
#include <QBuffer>
#include <QFile>


ItemDAO::ItemDAO(QString databaseName) : DAO(databaseName, "item")
{

}


void ItemDAO::inserir(Item item)
{
    QSqlDatabase database = QSqlDatabase::database(this->connectionName);
    QSqlQuery query(database);
/*    ///TESTESSS
    query.prepare("INSERT INTO ITENS (data, nome, descricao) VALUES (:data, :nome, 'huhuhu')");

    query.bindValue(":data", QDateTime::currentDateTime().toString("dd/MM/yyyy hh:mm:ss"));
    query.bindValue(":nome", item.getNome());
*/
    query.prepare("INSERT INTO T_ITEM (ft_item, nm_item, ds_item) VALUES (:foto, :nome, :descricao)");

    //query.bindValue(":data", QDateTime::currentDateTime().toString("dd/MM/yyyy hh:mm:ss"));

    //Ajustes para guardar a imagem
/*
    QPixmap pixMap = item.getFoto();
    QByteArray byteArray;
    QBuffer buffer(&byteArray);
    buffer.open(QIODevice::WriteOnly);
    pixMap.save(&buffer, "PNG");
*/


    query.bindValue(":foto", item.getFoto());
    query.bindValue(":nome", item.getNome());
    query.bindValue(":descricao", item.getDescricao());


    if(query.exec()){
        qDebug() << "inseriu";

    } else{
        qDebug() << "Falha ao inserir";
        qDebug() << query.lastError();
    }

}

void ItemDAO::remover(Item item)
{
    QSqlDatabase database = QSqlDatabase::database(this->connectionName);
    QSqlQuery query(database);
    query.prepare("DELETE FROM itens WHERE data = 'hehehe'");
    query.exec();
}

void ItemDAO::atualizar(Item item)
{

}

QSqlTableModel * ItemDAO::listar(QObject * parent)
{
    QSqlDatabase database = QSqlDatabase::database(this->connectionName);

    QSqlTableModel * model = new QSqlTableModel(parent, database);

    model->setEditStrategy(QSqlTableModel::OnManualSubmit);
    model->setTable("T_ITEM");
    model->select();

    model->setHeaderData(0, Qt::Horizontal, QObject::tr("Foto"));
    model->setHeaderData(1, Qt::Horizontal, QObject::tr("Nome"));
    model->setHeaderData(2, Qt::Horizontal, QObject::tr("Descrição"));

    return model;
}

void ItemDAO::deletaLista(QSqlTableModel * model)
{
    delete model;
}
