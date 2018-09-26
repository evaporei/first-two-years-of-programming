#include "filedownloader.h"
#include <QDir>

FileDownloader::FileDownloader(QObject *parent) : QObject(parent)
{

}

FileDownloader::~FileDownloader()
{
    delete m_Manager;
}

void FileDownloader::setNewPath(QString directoryPath)
{
    this->newPath = directoryPath;
}


void FileDownloader::downloadFile(QString sourcePath, QString directoryPath, QString fileName)
{
    setNewPath(directoryPath + fileName);
    m_Manager = new QNetworkAccessManager(this);

    connect(m_Manager, SIGNAL(finished(QNetworkReply *)), this, SLOT(replyFinished(QNetworkReply *)));

    m_Manager->get(QNetworkRequest(QUrl(sourcePath)));
}

void FileDownloader::replyFinished (QNetworkReply * reply)
{
    if(reply->error()){

        qDebug() << "reply error";
        qDebug() << reply->errorString();

    } else {

        QFile * file = new QFile(QDir::currentPath() + newPath);

        if(file->open(QIODevice::ReadWrite | QIODevice::Truncate | QIODevice::Text)){

            file->write(reply->readAll());
            file->flush();
            file->close();

        }

        delete file;

    }

    delete reply;

}
